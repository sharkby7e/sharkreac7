import React, { useState } from "react";

function Navbar() {
  return (
    <div class="navbar bg-primary text-primary-content">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary opacity-100 rounded-box w-52"
          >
            <li>
              <a href="/sharkreac7">About Me</a>
            </li>
            <li tabindex="0">
              <a href="/sharkreac7/portfolio" class="justify-between">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/sharkreac7/contact">Contact</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-4xl">sharkby7e</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu font-bold menu-horizontal p-0">
          <li>
            <a href="/sharkreac7">About Me</a>
          </li>
          <li tabindex="0">
            <a href="/sharkreac7/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/sharkreac7/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
