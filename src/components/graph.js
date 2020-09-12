function Graph(vertexes, edges) {
    this.vertexes = typeof vertexes === "undefined" ? [] : vertexes;
    this.edges = typeof edges === "undefined" ? [] : edges;

    //邻接表
    this.adjacencyList = new Array(this.vertexes.length);

    for (let i = 0; i < this.vertexes.length; i++) {
        this.adjacencyList[i] = [];
    }

    this.addedge = function (edge, index = 0) {
        this.adjacencyList[edge.from].push({
            index: index,
            from: edge.from,
            to: edge.to,
            dist: edge.dist
        });
        if (!edge.isDirected) {
            this.adjacencyList[edge.to].push({
                index: index,
                from: edge.to,
                to: edge.from,
                dist: edge.dist
            });
        }
    }

    this.edges.forEach((value, index) => {
        this.addedge(value, index);
    })
    return this;
}

export default Graph;