#!/usr/bin/env python3

import argparse
import json
from collections import Counter, defaultdict
from pathlib import Path


def load_graph(path: Path) -> dict:
    data = json.loads(path.read_text())
    if not isinstance(data, dict) or "nodes" not in data or "edges" not in data:
        raise ValueError(f"{path} does not look like a graph JSON with nodes/edges")
    return data


def degree_counters(edges: list[dict]) -> tuple[Counter, Counter]:
    incoming = Counter()
    outgoing = Counter()
    for edge in edges:
        outgoing[edge["source"]] += 1
        incoming[edge["target"]] += 1
    return incoming, outgoing


def print_counter(title: str, counter: Counter, limit: int = 10) -> None:
    print(f"\n{title}")
    for key, count in counter.most_common(limit):
        print(f"- {count:>3}  {key}")


def summarize_graph(path: Path) -> None:
    graph = load_graph(path)
    nodes = graph["nodes"]
    edges = graph["edges"]
    node_map = {node["id"]: node for node in nodes}
    incoming, outgoing = degree_counters(edges)
    total_degree = incoming + outgoing

    focus_areas = Counter(node.get("focus_area", "Unknown") for node in nodes)
    node_types = Counter(node.get("type", "Unknown") for node in nodes)
    relationships = Counter(edge.get("relationship", "Unknown") for edge in edges)
    terminals = [node for node in nodes if node.get("terminal")]

    print(f"Graph: {path}")
    print(f"Nodes: {len(nodes)}")
    print(f"Edges: {len(edges)}")

    print_counter("Focus Areas", focus_areas, limit=len(focus_areas))
    print_counter("Node Types", node_types, limit=len(node_types))
    print_counter("Relationships", relationships, limit=len(relationships))

    print("\nTop Hub Nodes")
    for node_id, degree in total_degree.most_common(15):
        node = node_map[node_id]
        print(
            f"- {degree:>3}  {node['name']} | {node['type']} | "
            f"{node.get('focus_area', 'Unknown')}"
        )

    print("\nTop Cross-Pressure Edges")
    for edge in edges:
        edge["_priority"] = 0
        if edge["relationship"] == "creates_tension_with":
            edge["_priority"] = 3
        elif edge["relationship"] == "contradicts":
            edge["_priority"] = 2
        elif edge["relationship"] == "mitigates":
            edge["_priority"] = 1

    ranked_edges = sorted(
        edges,
        key=lambda edge: (
            -edge["_priority"],
            -(total_degree[edge["source"]] + total_degree[edge["target"]]),
        ),
    )
    for edge in ranked_edges[:20]:
        if edge["_priority"] == 0:
            continue
        source = node_map[edge["source"]]
        target = node_map[edge["target"]]
        print(
            f"- {edge['relationship']}: {source['name']} [{source.get('focus_area', 'Unknown')}]"
            f" -> {target['name']} [{target.get('focus_area', 'Unknown')}]"
        )

    focus_hubs: dict[str, list[tuple[int, str]]] = defaultdict(list)
    for node in nodes:
        focus_hubs[node.get("focus_area", "Unknown")].append(
            (total_degree[node["id"]], node["id"])
        )

    print("\nTheme Starters")
    for focus_area, items in sorted(
        focus_hubs.items(), key=lambda item: (-len(item[1]), item[0])
    ):
        top_nodes = sorted(items, reverse=True)[:5]
        labels = ", ".join(node_map[node_id]["name"] for _, node_id in top_nodes)
        print(f"- {focus_area}: {labels}")

    print("\nTerminal Outcomes")
    for node in terminals:
        print(f"- {node['name']} | {node['type']} | {node.get('focus_area', 'Unknown')}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Summarize a knowledge graph JSON file.")
    parser.add_argument("graph_path", type=Path, help="Path to graph JSON file")
    args = parser.parse_args()
    summarize_graph(args.graph_path)


if __name__ == "__main__":
    main()
