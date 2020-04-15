---
toc: true
description: Summary of CS224W - Machine Learning w/ Graph (1)
categories: [embedding, machine-learning, deep-learning, graph]
---

# CS224W - Machine Learning w/ Graph (1)

- Why Networks?

Networks are a general language for describing complex systems of interacting entities.

- Networks
  - **Society** :→ collection of 7+ billion individuals.
  - **Communication systems** :→ it links electronic devices
  - **Interaction** :→ between genes/proteins regulate life
  - **Thoughts** :→ it is hidden in the connections between billions of neurons in our brain
- Type of Networks
  - Social networks
  - Economic networks
  - Communication networks
  - Information networks
  - Internet
  - Networks of neurons
- Way to Analyze Networks
  - **Node classification** :→ predict the type/color of a given node
  - **Link prediction** :→ predict whether two nodes are linked
  - **Community detection** :→ identify densely linked clusters of nodes
  - **Network Similarity** :→ measure similarity of two nodes/networks
- Embedding Node
  - Let there is $Node u$, $Node v$.  When embedding, our goal is mapping nodes to $d$-dimensional embeddings such that nodes with similar network neighbourhoods are embedded close together.
    - **My thinking** :→ As I think, in Natural Language Area, between each word of given sentence, they have a certain **relationship** which they have to be represented by network representation. 
- Components of a Network
  - Object ($N$)
    - nodes, vertices
  - Interactions ($E$)
    - links, edges
  - System ($G(N, E)$)
    - network, graph
- Directed VS Undirected Graphs
  - Directed
    - links :→ directed /w arcs
    - examples :→ phone calls, following on Twitter.
  - Undirected
    - links :→ undirected which means it is symmetrical, reciprocal matrix.
    - example :→ collaborations, friendship on Facebook
- Bipartite Graph
  - it is a graph whose nodes can be divided into two disjoint sets $U$ and $V$ such that every link connects a node in $U$ to one in $V$ which means $U$ and $V$ are **independent sets.**
  - Examples
    - Authors - Papers
    - Actors - Movies
    - Users - Moveis
    - Recipes - Ingredients
    - Folded Network
      - Author collaboration networks
      - Movie co-rating networks
- Conclusion
  - As mentioned above, Networks are a general language for describing complex systems of interacting entities. No matter what you are in position it means domain, well-representation by graph will be powerful method to solve the given tasks.