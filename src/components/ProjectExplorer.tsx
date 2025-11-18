import { ChevronRight, ChevronDown, FileCode, FileJson, FileText } from "lucide-react";
import { useState } from "react";

interface ExplorerItem {
  name: string;
  type: "file" | "folder";
  icon?: React.ReactNode;
  children?: ExplorerItem[];
}

const ProjectExplorer = () => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["src"]));

  const projectStructure: ExplorerItem[] = [
    {
      name: "src",
      type: "folder",
      children: [
        { name: "overview.json", type: "file", icon: <FileJson className="w-4 h-4" /> },
        { name: "services.xml", type: "file", icon: <FileCode className="w-4 h-4" /> },
        { name: "portfolio.md", type: "file", icon: <FileText className="w-4 h-4" /> },
        { name: "studio.tsx", type: "file", icon: <FileCode className="w-4 h-4" /> },
        { name: "clients.yaml", type: "file", icon: <FileText className="w-4 h-4" /> },
        { name: "contact.tsx", type: "file", icon: <FileCode className="w-4 h-4" /> },
      ],
    },
  ];

  const toggleFolder = (folderName: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName);
    } else {
      newExpanded.add(folderName);
    }
    setExpandedFolders(newExpanded);
  };

  const renderItem = (item: ExplorerItem, level: number = 0) => {
    const isExpanded = expandedFolders.has(item.name);
    const paddingLeft = level * 12 + 8;

    return (
      <div key={item.name}>
        <div
          className="flex items-center gap-2 px-2 py-1.5 hover:bg-secondary/50 cursor-pointer material-transition text-sm group"
          style={{ paddingLeft: `${paddingLeft}px` }}
          onClick={() => item.type === "folder" && toggleFolder(item.name)}
        >
          {item.type === "folder" ? (
            <>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
              <span className="material-icons text-base text-primary">folder</span>
            </>
          ) : (
            <>
              <span className="w-4" />
              <span className="text-muted-foreground">{item.icon}</span>
            </>
          )}
          <span className="text-foreground group-hover:text-primary material-transition">
            {item.name}
          </span>
        </div>
        {item.type === "folder" && isExpanded && item.children && (
          <div>
            {item.children.map((child) => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="hidden lg:block w-64 bg-surface-variant border-r border-border elevation-1 overflow-y-auto">
      <div className="p-3 border-b border-border">
        <h2 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Project Explorer
        </h2>
      </div>
      <div className="py-2">
        {projectStructure.map((item) => renderItem(item))}
      </div>
    </aside>
  );
};

export default ProjectExplorer;
