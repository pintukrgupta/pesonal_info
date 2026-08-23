interface ArchitectureDiagramProps {
  nodes: string[];
  caption?: string;
}

export function ArchitectureDiagram({ nodes, caption }: ArchitectureDiagramProps) {
  const boxWidth = 84;
  const gap = 34;
  const height = 56;
  const width = nodes.length * boxWidth + (nodes.length - 1) * gap;

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        role="img"
        aria-label={`Stack flow: ${nodes.join(" to ")}`}
      >
        {nodes.slice(0, -1).map((_, i) => {
          const x1 = i * (boxWidth + gap) + boxWidth;
          const x2 = x1 + gap;
          const y = height / 2;
          return (
            <line
              key={`line-${i}`}
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke="hsl(var(--border))"
              strokeWidth="1.2"
            />
          );
        })}
        {nodes.map((node, i) => {
          const x = i * (boxWidth + gap);
          return (
            <g key={`${node}-${i}`}>
              <rect
                x={x}
                y={8}
                width={boxWidth}
                height={height - 16}
                rx={4}
                fill="none"
                stroke="hsl(var(--copper))"
                strokeWidth="1.2"
              />
              <text
                x={x + boxWidth / 2}
                y={height / 2 + 4}
                fill="hsl(var(--foreground))"
                fontFamily="var(--font-plex-mono)"
                fontSize="9"
                textAnchor="middle"
              >
                {node}
              </text>
            </g>
          );
        })}
      </svg>
      {caption && (
        <p className="mt-1.5 font-mono text-xs text-muted-foreground">{caption}</p>
      )}
    </div>
  );
}
