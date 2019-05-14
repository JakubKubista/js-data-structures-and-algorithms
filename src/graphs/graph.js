"use strict"

/**
 * Graph
 * Time Complexity: O(V+E)
 * Source: https://www.udemy.com/js-algorithms-and-data-structures-masterclass/learn/lecture/8344072#content
 */

class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}

function test() {
    let graph = new Graph();
    graph.addVertex("Dallas");
    graph.addVertex("Tokyo");
    graph.addVertex("Aspen");
    graph.addVertex("Los Angeles");
    graph.addVertex("Hong Kong")
    graph.addEdge("Dallas", "Tokyo");
    graph.addEdge("Dallas", "Aspen");
    graph.addEdge("Hong Kong", "Tokyo");
    graph.addEdge("Hong Kong", "Dallas");
    graph.addEdge("Los Angeles", "Hong Kong");
    graph.addEdge("Los Angeles", "Aspen");
}
test();






