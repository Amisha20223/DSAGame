export const questions = [
    // Level 1 - Basic DSA concepts
    {
      id: 1,
      level: 1,
      text: "What is the time complexity of searching for an element in a sorted array using binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correctAnswer: 1,
      explanation:
        "Binary search has a time complexity of O(log n) because it divides the search interval in half with each step.",
    },
    {
      id: 2,
      level: 1,
      text: "Which data structure operates on a LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Linked List", "Tree"],
      correctAnswer: 1,
      explanation:
        "A Stack follows the Last In, First Out (LIFO) principle, where the last element added is the first one to be removed.",
    },
    {
      id: 3,
      level: 1,
      text: "What is the worst-case time complexity of bubble sort?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctAnswer: 2,
      explanation:
        "Bubble sort has a worst-case time complexity of O(n²) because it compares each element with every other element.",
    },
    {
      id: 4,
      level: 1,
      text: "In Java, which of the following is NOT a primitive data type?",
      options: ["int", "boolean", "String", "char"],
      correctAnswer: 2,
      explanation:
        "String is not a primitive data type in Java. It's a class, while int, boolean, and char are primitive types.",
    },
  
    // Level 2 - Intermediate DSA concepts
    {
      id: 5,
      level: 2,
      text: "What is the time complexity of inserting an element into a hash table?",
      options: ["O(1) average case", "O(n) always", "O(log n) always", "O(n²) worst case"],
      correctAnswer: 0,
      explanation:
        "Hash table insertions have an average time complexity of O(1), though the worst case can be O(n) if there are many collisions.",
    },
    {
      id: 6,
      level: 2,
      text: "Which traversal of a binary tree visits the root node first?",
      options: ["In-order", "Pre-order", "Post-order", "Level-order"],
      correctAnswer: 1,
      explanation:
        "Pre-order traversal visits the root node first, then the left subtree, and finally the right subtree.",
    },
    {
      id: 7,
      level: 2,
      text: "What is the primary advantage of a Red-Black tree over a regular Binary Search Tree?",
      options: ["Faster search times", "Self-balancing", "Less memory usage", "Simpler implementation"],
      correctAnswer: 1,
      explanation:
        "Red-Black trees are self-balancing, which ensures that operations like insertion, deletion, and search remain efficient (O(log n)) even in worst-case scenarios.",
    },
    {
      id: 8,
      level: 2,
      text: "In Java, which interface is implemented by ArrayList and LinkedList?",
      options: ["Collection", "List", "Set", "Map"],
      correctAnswer: 1,
      explanation:
        "Both ArrayList and LinkedList implement the List interface in Java, which extends the Collection interface.",
    },
  
    // Level 3 - Advanced DSA concepts
    {
      id: 9,
      level: 3,
      text: "What is the time complexity of Dijkstra's algorithm for finding the shortest path in a graph with V vertices and E edges, using a binary heap?",
      options: ["O(V)", "O(E)", "O(V log V + E log V)", "O(V²)"],
      correctAnswer: 2,
      explanation:
        "Using a binary heap, Dijkstra's algorithm has a time complexity of O((V+E) log V), which simplifies to O(E log V) for connected graphs.",
    },
    {
      id: 10,
      level: 3,
      text: "Which of the following sorting algorithms has the best average-case time complexity?",
      options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
      correctAnswer: 2,
      explanation:
        "Quick Sort has an average-case time complexity of O(n log n), which is better than Bubble Sort, Insertion Sort, and Selection Sort, which all have O(n²).",
    },
    {
      id: 11,
      level: 3,
      text: "What data structure would be most efficient for implementing a priority queue?",
      options: ["Array", "Linked List", "Binary Search Tree", "Heap"],
      correctAnswer: 3,
      explanation:
        "A Heap is the most efficient data structure for implementing a priority queue, with O(log n) time complexity for insertion and deletion of the highest-priority element.",
    },
    {
      id: 12,
      level: 3,
      text: "In Java, which of the following is true about the 'synchronized' keyword?",
      options: [
        "It's used to create immutable objects",
        "It ensures thread safety by allowing only one thread to access the synchronized code at a time",
        "It's used to optimize code execution",
        "It's a way to implement inheritance",
      ],
      correctAnswer: 1,
      explanation:
        "The 'synchronized' keyword in Java ensures thread safety by allowing only one thread to access the synchronized code block or method at a time, preventing race conditions.",
    },
  ]
  
  