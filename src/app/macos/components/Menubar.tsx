"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaApple, FaWifi } from "react-icons/fa";
import { Time } from "../../main_interface/components/Time";
import { IoMdBluetooth, IoMdSearch } from "react-icons/io";
import { FaDisplay } from "react-icons/fa6";
import { TiBatteryCharge } from "react-icons/ti";
import Calender from "../../main_interface/components/Calender";

function Menubar() {
  const [apple_is_clicked, setAppleIsClicked] = useState<boolean>(false);
  const [finder_is_clicked, setFinderIsClicked] = useState<boolean>(false);
  const [file_is_clicked, setFileIsClicked] = useState<boolean>(false);
  const [edit_is_clicked, setEditIsClicked] = useState<boolean>(false);
  const [view_is_clicked, setViewIsClicked] = useState<boolean>(false);
  const [go_is_clicked, setGoIsClicked] = useState<boolean>(false);
  const [window_is_clicked, setWindowIsClicked] = useState<boolean>(false);
  const [help_is_clicked, setHelpIsClicked] = useState<boolean>(false);
  const [time_is_clicked, setTimeIsClicked] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white/50">
        <nav className="menubar flex w-full gap-20">
          <div className="menus">
            <ul className="flex gap-5 text-[17px] font-medium">
              <li className="hover:cursor-pointer">
                <ul className="text-2xl">
                  {/* Apple Logo */}
                  <FaApple
                    className="ml-3"
                    onClick={() => {
                      if (!apple_is_clicked) {
                        setAppleIsClicked(true);
                        setEditIsClicked(false);
                        setFileIsClicked(false);
                        setFinderIsClicked(false);
                        setGoIsClicked(false);
                        setHelpIsClicked(false);
                        setViewIsClicked(false);
                        setWindowIsClicked(false);
                      } else {
                        setAppleIsClicked(false);
                      }
                    }}
                  />
                </ul>
              </li>
              <li
                className="hover:cursor-pointer font-bold"
                onClick={() => {
                  if (!finder_is_clicked) {
                    setFinderIsClicked(true);
                    setAppleIsClicked(false);
                    setEditIsClicked(false);
                    setFileIsClicked(false);
                    setGoIsClicked(false);
                    setHelpIsClicked(false);
                    setViewIsClicked(false);
                    setWindowIsClicked(false);
                  } else {
                    setFinderIsClicked(false);
                  }
                }}
              >
                Finder
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => {
                  if (!file_is_clicked) {
                    setFileIsClicked(true);
                    setFinderIsClicked(false);
                    setAppleIsClicked(false);
                    setEditIsClicked(false);
                    setGoIsClicked(false);
                    setHelpIsClicked(false);
                    setViewIsClicked(false);
                    setWindowIsClicked(false);
                  } else {
                    setFileIsClicked(false);
                  }
                }}
              >
                File
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => {
                  if (!edit_is_clicked) {
                    setEditIsClicked(true);
                    setFileIsClicked(false);
                    setFinderIsClicked(false);
                    setAppleIsClicked(false);
                    setGoIsClicked(false);
                    setHelpIsClicked(false);
                    setViewIsClicked(false);
                    setWindowIsClicked(false);
                  } else {
                    setEditIsClicked(false);
                  }
                }}
              >
                Edit
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => {
                  if (!view_is_clicked) {
                    setViewIsClicked(true);
                    setEditIsClicked(false);
                    setFileIsClicked(false);
                    setFinderIsClicked(false);
                    setAppleIsClicked(false);
                    setGoIsClicked(false);
                    setHelpIsClicked(false);
                    setWindowIsClicked(false);
                  } else {
                    setViewIsClicked(false);
                  }
                }}
              >
                View
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => {
                  if (!go_is_clicked) {
                    setGoIsClicked(true);
                    setViewIsClicked(false);
                    setEditIsClicked(false);
                    setFileIsClicked(false);
                    setFinderIsClicked(false);
                    setAppleIsClicked(false);
                    setHelpIsClicked(false);
                    setWindowIsClicked(false);
                  } else {
                    setGoIsClicked(false);
                  }
                }}
              >
                Go
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => {
                  if (!window_is_clicked) {
                    setWindowIsClicked(true);
                    setGoIsClicked(false);
                    setViewIsClicked(false);
                    setEditIsClicked(false);
                    setFileIsClicked(false);
                    setFinderIsClicked(false);
                    setAppleIsClicked(false);
                    setHelpIsClicked(false);
                  } else {
                    setWindowIsClicked(false);
                  }
                }}
              >
                Window
              </li>
              <li
                className="hover:cursor-pointer"
                onClick={() => {
                  if (!help_is_clicked) {
                    setHelpIsClicked(true);
                    setWindowIsClicked(false);
                    setGoIsClicked(false);
                    setViewIsClicked(false);
                    setEditIsClicked(false);
                    setFileIsClicked(false);
                    setFinderIsClicked(false);
                    setAppleIsClicked(false);
                  } else {
                    setHelpIsClicked(false);
                  }
                }}
              >
                Help
              </li>
            </ul>
          </div>
          <div className="status justify-end flex-grow mr-1">
            <ul className="flex space-x-2 text-[17px] font-medium justify-end ">
              {/* Time Viewer */}
              <li>
                <FaWifi className="text-2xl hover:cursor-pointer" />
              </li>
              <li>
                <IoMdBluetooth className="text-2xl hover:cursor-pointer" />
              </li>
              <li>
                <FaDisplay className="text-2xl hover:cursor-pointer" />
              </li>
              <li>
                <TiBatteryCharge className="text-2xl hover:cursor-pointer" />
              </li>
              <li>
                <IoMdSearch className="text-2xl hover:cursor-pointer" />
              </li>
              <div
                onClick={() => {
                  if (!time_is_clicked) {
                    setTimeIsClicked(true);
                    setHelpIsClicked(false);
                    setWindowIsClicked(false);
                    setGoIsClicked(false);
                    setViewIsClicked(false);
                    setEditIsClicked(false);
                    setFileIsClicked(false);
                    setFinderIsClicked(false);
                    setAppleIsClicked(false);
                  } else {
                    setTimeIsClicked(false);
                  }
                }}
              >
                <Time />
              </div>
            </ul>
          </div>
        </nav>
      </div>
      {apple_is_clicked && (
        <div className="absolute bg-white/50 top-7 rounded left-2 pt-1 pb-1 w-56">
          <ul>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                About This Mac
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                System Preferences...
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                App Store...
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Recent Items
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Force Quit
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Sleep
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Restart
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Shutdown
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Lock Screen
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Log Out User...
              </div>
            </li>
          </ul>
        </div>
      )}
      {finder_is_clicked && (
        <div className="absolute bg-white/50 top-7 rounded left-10 pt-1 pb-1 w-56">
          <ul>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                About Finder
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Preferences
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Empty Trash
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Hide Finder
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Hide Others
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Show All
              </div>
            </li>
          </ul>
        </div>
      )}
      {file_is_clicked && (
        <div className="absolute bg-white/50 top-7 rounded left-28 pt-1 pb-1 w-56">
          <ul>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                New Finder Window
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                New Folder
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                New Folder With Selection
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                New Smart Folder
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                New Tab
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Open
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Open With
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Print
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Close Window
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Get Info
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Rename
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Compress
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Duplicate
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Make Alias
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Quick Look
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Show Original
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Add to Sidebar
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Move to Trash
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Eject
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Find
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Tags...
              </div>
            </li>
          </ul>
        </div>
      )}
      {edit_is_clicked && (
        <div className="absolute bg-white/50 top-7 rounded left-44 pt-1 pb-1 w-56">
          <ul>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Undo
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Redo
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Cut
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Copy
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Paste
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Select All
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Show Clipboard
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Start Dictation...
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Emoji & Symbols
              </div>
            </li>
          </ul>
        </div>
      )}
      {view_is_clicked && (
        <div className="absolute bg-white/50 top-7 rounded left-56 pt-1 pb-1 w-56">
          <ul>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                As Icons
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                As List
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                As Columns
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                As Gallery
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Use Stacks
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Sort By
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Clean Up
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Clean Up By
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Hide Sidebar
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Show Preview
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Hide Toolbar
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Show All Tabs
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Show Tab Bar
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Show Path Bar
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Show Status Bar
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Customize Toolbar
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Show View Options
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Show Preview Options
              </div>
            </li>
          </ul>
        </div>
      )}
      {go_is_clicked && (
        <div className="absolute bg-white/50 top-7 rounded left-72 pt-1 pb-1 w-56">
          <ul>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Back
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Forward
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Enclosing Folder
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Recents
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Documents
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Desktop
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Downloads
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Home
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Computer
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Airdrop
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Network
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                iCloud Drive
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Applications
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Utilities
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Go to Folder
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Connect to Server
              </div>
            </li>
          </ul>
        </div>
      )}
      {window_is_clicked && (
        <div className="absolute bg-white/50 top-7 rounded left-[328px] pt-1 pb-1 w-56">
          <ul>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Minimize
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Zoom
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Move Window to Left Side of Screen
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Move Window to Right Side of Screen
              </div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Cycle Through Windows
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Show Previous Tab
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Show Next Tab
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Move Tab to New Window
              </div>
            </li>
            <li>
              <div className="text-gray-500 hover:cursor-pointer hover:rounded-md hover:w-[220px] pl-2">
                Merge all Windows
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Bring All to Front
              </div>
            </li>
          </ul>
        </div>
      )}
      {help_is_clicked && (
        <div className="absolute bg-white/50 top-7 rounded left-[412px] pt-1 pb-1 w-56">
          <ul>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                Send Finder Feedback
              </div>
              <div className="border-slate-500 border-b-2 w-[216px] ml-1 rounded-2xl"></div>
            </li>
            <li>
              <div className="hover:cursor-pointer hover:bg-sky-500 hover:rounded-md hover:w-[220px] pl-2">
                macOS Help
              </div>
            </li>
          </ul>
        </div>
      )}
      <div className="absolute bg-white/50 w-fit rounded right-0 mt-7 mr-1">
        {time_is_clicked && <Calender />}
      </div>
    </>
  );
}

export default Menubar;
