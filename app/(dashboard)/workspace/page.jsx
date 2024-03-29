"use client";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import BasicArea from "@/components/partials/chart/appex-chart/BasicArea";

import React, { useState } from 'react';
import TinyMCEEditor from './textEditor';
import FolderTree from './fileStructure'



const folderStructdata = [
  {
    id: 1,
    name: 'Shared By Client',
    type: 'folder',
    children: [
      {
        id: 2,
        name: 'Legal_Carriage_Limit.pdf',
        type: 'file'
      },
      {
        id: 3,
        name: 'Court_Filings_Sam.docx',
        type: 'file'
      }
    ]
  },
  {
    id: 4,
    name: 'Docs',
    type: 'folder',
    children: [
      {
        id: 5,
        name: 'Evidence',
        type: 'folder',
        children: [
          {
            id: 6,
            name: 'Evidence_Doc_Sam_J_Mark.zip',
            type: 'file'
          },
          {
            id: 7,
            name: 'Emails_Correspondence.txt',
            type: 'file'
          },
        ]
      }
    ]
  }
];



const profile = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>
      <div className="space-y-5 profile-page">
         



        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-3 col-span-12">
            <Card title="Case: Sam Sea Carriage - Loss of goods">
              <ul className="list space-y-8">
                <li className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:envelope" />
                  </div>
                  <div className="flex-1">
                    <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      EMAIL
                    </div>
                    <a
                      href="mailto:someone@example.com"
                      className="text-base text-slate-600 dark:text-slate-50"
                    >
                      info-500@hashraft.com
                    </a>
                  </div>
                </li>

                <li className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:phone-arrow-up-right" />
                  </div>
                  <div className="flex-1">
                    <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      PHONE
                    </div>
                    <a
                      href="tel:0189749676767"
                      className="text-base text-slate-600 dark:text-slate-50"
                    >
                      +1-202-555-0151
                    </a>
                  </div>
                </li>

                <li className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:map" />
                  </div>
                  <div className="flex-1">
                    <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      LOCATION
                    </div>
                    <div className="text-base text-slate-600 dark:text-slate-50">
                      Home# 320/N, Road# 71/B, Mohakhali, HSR layout, Bangalore
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
          <div className="lg:col-span-5 col-span-12">
            <Card title="Activity Timeline">
              <BasicArea height={190} />
            </Card>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <Card title="My Folders">
              <FolderTree data={folderStructdata} />  
            </Card>
          </div>
          <div className="lg:col-span-12 col-span-12">
            <Card title="Text editor">
              <TinyMCEEditor initialValue={content} handleChange={handleContentChange} />
              {/* <div>
                <h2>Content Preview</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div> */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
