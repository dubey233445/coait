import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const NeuralBackground = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<{ from: Node; to: Node; distance: number }[]>([]);

  useEffect(() => {
    // Initialize nodes
    const initialNodes: Node[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setNodes(initialNodes);

    const animationFrame = () => {
      setNodes(prevNodes => {
        const newNodes = prevNodes.map(node => {
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newVx = node.vx;
          let newVy = node.vy;

          // Bounce off walls
          if (newX <= 0 || newX >= window.innerWidth) newVx *= -1;
          if (newY <= 0 || newY >= window.innerHeight) newVy *= -1;

          // Keep within bounds
          newX = Math.max(0, Math.min(window.innerWidth, newX));
          newY = Math.max(0, Math.min(window.innerHeight, newY));

          return { ...node, x: newX, y: newY, vx: newVx, vy: newVy };
        });

        // Calculate connections
        const newConnections: { from: Node; to: Node; distance: number }[] = [];
        for (let i = 0; i < newNodes.length; i++) {
          for (let j = i + 1; j < newNodes.length; j++) {
            const distance = Math.sqrt(
              Math.pow(newNodes[i].x - newNodes[j].x, 2) +
              Math.pow(newNodes[i].y - newNodes[j].y, 2)
            );
            if (distance < 150) {
              newConnections.push({
                from: newNodes[i],
                to: newNodes[j],
                distance,
              });
            }
          }
        }
        setConnections(newConnections);

        return newNodes;
      });
    };

    const interval = setInterval(animationFrame, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full">
        {/* Connections */}
        {connections.map((connection, index) => (
          <motion.line
            key={`${connection.from.id}-${connection.to.id}-${index}`}
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke="hsl(var(--ai-glow))"
            strokeWidth="1"
            opacity={Math.max(0.1, 1 - connection.distance / 150)}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
        
        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="2"
            fill="hsl(var(--ai-glow))"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.id * 0.1,
            }}
          />
        ))}
      </svg>
    </div>
  );
};
