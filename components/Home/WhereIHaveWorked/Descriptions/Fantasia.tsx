import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";

export default function Fantasia() {
    const tasks=["k"];
  return (
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-mono">
            Server Manager Assistant <span className="text-AAsecondary">@ Windows Server</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June - July 2018</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-2 ">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 ">
              Responsible for Windows Server 2008 r2 installs, configuration and support Active Directory, DNS, DHCP,
              WINS..
            </span>
          </div>
          {/* Desctiption 2 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 ">
              <span className="text-AAsecondary">Migration</span> of Windows 2008 to Windows Server 2012 .
            </span>
          </div>
          {/* Desctiption 3 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 ">
              Responsible for Server full, differential and incremental backups using{" "}
              <span className="text-AAsecondary">Veeam Endpoint Backup</span> with{" "}
              <span className="text-AAsecondary">SQL Server 2012.</span> .
            </span>
          </div>
        </div>
      </div>
  );
}
