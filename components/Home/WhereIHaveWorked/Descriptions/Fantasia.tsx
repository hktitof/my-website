import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Fantasia() {
  const tasks = [
    {
      text: "Led the installation, configuration, and support of Windows services including Active Directory, DNS, DHCP, and WINS on Windows Server 2008 R2.",
      keywords: ["Windows Server 2008 R2", "Active Directory", "DNS", "DHCP", "WINS"],
    },
    {
      text: "Managed the migration from Windows Server 2008 to Windows Server 2012, ensuring minimal downtime and smooth transition.",
      keywords: ["Migration", "Windows Server 2012"],
    },
    {
      text: "Responsible for full, differential, and incremental backups using Veeam Endpoint Backup with SQL Server 2012, ensuring data security and system reliability.",
      keywords: ["Veeam Endpoint Backup", "SQL Server 2012", "data security", "system reliability"],
    },
  ];

  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Server Manager <span className="text-AAsecondary">@ Windows Server</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Fab - Sept 2018</span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {tasks.map((item, index) => {
          return (
            <div key={index} className="flex flex-row space-x-2">
              <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
              <span
                className="text-gray-500 sm:text-sm text-xs"
                dangerouslySetInnerHTML={{
                  __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                }}
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
