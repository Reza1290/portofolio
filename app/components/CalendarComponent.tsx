


const CalendarComponent = () => {
    return (
        <section className="relative py-8 sm:p-8 grid grid-cols-4 ">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 col-span-3">
        <div className="flex  items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-4"> 
            <h5 className="text-xl leading-8 font-semibold text-gray-900">January 2024</h5>
            <div className="flex items-center gap-2">
              <button className="hidden md:flex py-2 pl-1.5 pr-3 rounded-md bg-gray-50 border border-gray-300 items-center gap-1.5 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100">
                <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M11.3333 3L11.3333 3.65L11.3333 3ZM4.66666 3.00002L4.66666 2.35002L4.66666 3.00002ZM5.36719 9.98333C5.72617 9.98333 6.01719 9.69232 6.01719 9.33333C6.01719 8.97435 5.72617 8.68333 5.36719 8.68333V9.98333ZM5.33385 8.68333C4.97487 8.68333 4.68385 8.97435 4.68385 9.33333C4.68385 9.69232 4.97487 9.98333 5.33385 9.98333V8.68333ZM5.36719 11.9833C5.72617 11.9833 6.01719 11.6923 6.01719 11.3333C6.01719 10.9743 5.72617 10.6833 5.36719 10.6833V11.9833ZM5.33385 10.6833C4.97487 10.6833 4.68385 10.9743 4.68385 11.3333C4.68385 11.6923 4.97487 11.9833 5.33385 11.9833V10.6833ZM8.03385 9.98333C8.39284 9.98333 8.68385 9.69232 8.68385 9.33333C8.68385 8.97435 8.39284 8.68333 8.03385 8.68333V9.98333ZM8.00052 8.68333C7.64154 8.68333 7.35052 8.97435 7.35052 9.33333C7.35052 9.69232 7.64154 9.98333 8.00052 9.98333V8.68333ZM8.03385 11.9833C8.39284 11.9833 8.68385 11.6923 8.68385 11.3333C8.68385 10.9743 8.39284 10.6833 8.03385 10.6833V11.9833ZM8.00052 10.6833C7.64154 10.6833 7.35052 10.9743 7.35052 11.3333C7.35052 11.6923 7.64154 11.9833 8.00052 11.9833V10.6833ZM10.7005 9.98333C11.0595 9.98333 11.3505 9.69232 11.3505 9.33333C11.3505 8.97435 11.0595 8.68333 10.7005 8.68333V9.98333ZM10.6672 8.68333C10.3082 8.68333 10.0172 8.97435 10.0172 9.33333C10.0172 9.69232 10.3082 9.98333 10.6672 9.98333V8.68333ZM10.7005 11.9833C11.0595 11.9833 11.3505 11.6923 11.3505 11.3333C11.3505 10.9743 11.0595 10.6833 10.7005 10.6833V11.9833ZM10.6672 10.6833C10.3082 10.6833 10.0172 10.9743 10.0172 11.3333C10.0172 11.6923 10.3082 11.9833 10.6672 11.9833V10.6833ZM5.98333 2C5.98333 1.64101 5.69232 1.35 5.33333 1.35C4.97435 1.35 4.68333 1.64101 4.68333 2H5.98333ZM4.68333 4C4.68333 4.35898 4.97435 4.65 5.33333 4.65C5.69232 4.65 5.98333 4.35898 5.98333 4H4.68333ZM11.3167 2C11.3167 1.64101 11.0257 1.35 10.6667 1.35C10.3077 1.35 10.0167 1.64101 10.0167 2H11.3167ZM10.0167 4C10.0167 4.35898 10.3077 4.65 10.6667 4.65C11.0257 4.65 11.3167 4.35898 11.3167 4H10.0167ZM4.66666 3.65002L11.3333 3.65L11.3333 2.35L4.66666 2.35002L4.66666 3.65002ZM13.35 5.66667V11.3334H14.65V5.66667H13.35ZM11.3333 13.35H4.66667V14.65H11.3333V13.35ZM2.65 11.3334V5.66668H1.35V11.3334H2.65ZM4.66667 13.35C4.01975 13.35 3.59995 13.3486 3.29025 13.307C2.99924 13.2679 2.90451 13.2042 2.85014 13.1499L1.9309 14.0691C2.26707 14.4053 2.68186 14.5369 3.11703 14.5954C3.53349 14.6514 4.0565 14.65 4.66667 14.65V13.35ZM1.35 11.3334C1.35 11.9435 1.34862 12.4665 1.40461 12.883C1.46312 13.3182 1.59474 13.733 1.9309 14.0691L2.85014 13.1499C2.79578 13.0955 2.73214 13.0008 2.69302 12.7098C2.65138 12.4001 2.65 11.9803 2.65 11.3334H1.35ZM13.35 11.3334C13.35 11.9803 13.3486 12.4001 13.307 12.7098C13.2679 13.0008 13.2042 13.0955 13.1499 13.1499L14.0691 14.0691C14.4053 13.733 14.5369 13.3182 14.5954 12.883C14.6514 12.4665 14.65 11.9435 14.65 11.3334H13.35ZM11.3333 14.65C11.9435 14.65 12.4665 14.6514 12.883 14.5954C13.3181 14.5369 13.7329 14.4053 14.0691 14.0691L13.1499 13.1499C13.0955 13.2042 13.0008 13.2679 12.7098 13.307C12.4 13.3486 11.9802 13.35 11.3333 13.35V14.65ZM11.3333 3.65C11.9802 3.65 12.4 3.65138 12.7098 3.69302C13.0008 3.73215 13.0955 3.79578 13.1499 3.85015L14.0691 2.93091C13.7329 2.59474 13.3181 2.46312 12.883 2.40461C12.4665 2.34862 11.9435 2.35 11.3333 2.35L11.3333 3.65ZM14.65 5.66667C14.65 5.05651 14.6514 4.53349 14.5954 4.11703C14.5369 3.68187 14.4053 3.26707 14.0691 2.93091L13.1499 3.85015C13.2042 3.90451 13.2679 3.99924 13.307 4.29025C13.3486 4.59996 13.35 5.01976 13.35 5.66667H14.65ZM4.66666 2.35002C4.0565 2.35002 3.53349 2.34864 3.11702 2.40463C2.68186 2.46314 2.26707 2.59476 1.9309 2.93092L2.85014 3.85016C2.90451 3.7958 2.99924 3.73216 3.29025 3.69304C3.59995 3.6514 4.01975 3.65002 4.66666 3.65002L4.66666 2.35002ZM2.65 5.66668C2.65 5.01977 2.65138 4.59997 2.69302 4.29027C2.73214 3.99926 2.79578 3.90452 2.85014 3.85016L1.9309 2.93092C1.59474 3.26709 1.46312 3.68188 1.40461 4.11704C1.34862 4.53351 1.35 5.05652 1.35 5.66668H2.65ZM2 7.31667H14V6.01667H2V7.31667ZM5.36719 8.68333H5.33385V9.98333H5.36719V8.68333ZM5.36719 10.6833H5.33385V11.9833H5.36719V10.6833ZM8.03385 8.68333H8.00052V9.98333H8.03385V8.68333ZM8.03385 10.6833H8.00052V11.9833H8.03385V10.6833ZM10.7005 8.68333H10.6672V9.98333H10.7005V8.68333ZM10.7005 10.6833H10.6672V11.9833H10.7005V10.6833ZM4.68333 2V4H5.98333V2H4.68333ZM10.0167 2V4H11.3167V2H10.0167Z" fill="#6B7280"></path>
                </svg>Today
              </button>
              <button className="text-gray-500 rounded transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentcolor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button>
              <button className="text-gray-500 rounded transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6.00236 3.99707L10.0025 7.99723L6 11.9998" stroke="currentcolor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></button>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 ">
            <div className="flex items-center gap-2">
              <button className="p-3 text-gray-500 flex items-center justify-center transition-all duration-300 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.9584 13.2844V8.28435M9.9584 5.83333C9.97468 5.83333 10.0001 5.83333 10.0001 5.83333M17.5001 10C17.5001 14.1421 14.1422 17.5 10.0001 17.5C5.85793 17.5 2.50006 14.1421 2.50006 10C2.50006 5.85786 5.85793 2.5 10.0001 2.5C14.1422 2.5 17.5001 5.85786 17.5001 10Z" stroke="currentcolor" stroke-width="1.3" stroke-linecap="round"></path>
                </svg>
              </button>
              <span className="w-px h-7 bg-gray-200"></span>
              <button className="p-3 text-gray-500 flex items-center justify-center transition-all duration-300 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.7501 9.20285C17.4658 8.79486 17.7119 7.89657 17.3012 7.19137L16.559 5.91699C16.1385 5.19489 15.1995 4.94638 14.466 5.36301C13.4469 5.94185 12.1716 5.19438 12.1716 4.03885C12.1716 3.19732 11.4764 2.5 10.6188 2.5H9.17632C8.33949 2.5 7.66111 3.16571 7.66111 3.9869V4.09222C7.66111 5.19157 6.44713 5.8776 5.4782 5.3258C4.78224 4.92946 3.89057 5.16345 3.48911 5.84779L2.70103 7.19113C2.28763 7.89582 2.5327 8.79589 3.24919 9.20432C4.24554 9.77228 4.24337 11.1862 3.24904 11.7576C2.53341 12.1688 2.28715 13.0712 2.7009 13.7764L3.48911 15.12C3.89057 15.8043 4.78478 16.0369 5.48074 15.6406C6.4466 15.0905 7.66111 15.7719 7.66111 16.8677C7.66111 17.6529 8.30976 18.2895 9.10991 18.2895H10.6853C11.5061 18.2895 12.1716 17.6365 12.1716 16.831C12.1716 15.7075 13.4115 15.0058 14.4024 15.5686L14.466 15.6048C15.1995 16.0214 16.1385 15.7729 16.559 15.0508L17.3013 13.7762C17.7124 13.0704 17.4651 12.1699 16.7502 11.7591C15.7547 11.1871 15.7526 9.77146 16.7501 9.20285Z" stroke="currentcolor" stroke-width="1.3"></path>
                  <path d="M12.68 10.3947C12.68 11.8481 11.4794 13.0263 9.99834 13.0263C8.5173 13.0263 7.31668 11.8481 7.31668 10.3947C7.31668 8.94136 8.5173 7.76316 9.99834 7.76316C11.4794 7.76316 12.68 8.94136 12.68 10.3947Z" stroke="currentcolor" stroke-width="1.3"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-px p-1 rounded-md bg-gray-100">
              <button className="py-2.5 px-5 rounded-lg bg-gray-100 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">Day</button>
              <button className="py-2.5 px-5 rounded-lg bg-white text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">Week</button>
              <button className="py-2.5 px-5 rounded-lg bg-gray-100 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white">Month</button>
            </div>
          </div>
          <div className="dropdown relative inline-flex md:hidden">
            <button type="button" data-target="dropdown-default" className="dropdown-toggle inline-flex justify-center items-center gap-2 py-1.5 px-2.5 text-sm bg-gray-50 text-gray-900 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 3H21M3 15H21M7 9H16.5M7 21H16.5" stroke="currentcolor" stroke-width="1.6" stroke-linecap="round"></path>
              </svg>
              <svg className="dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
              </svg>
            </button>
            <div id="dropdown-default" className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full w-max -left-20 mt-2 open" aria-labelledby="dropdown-default">
              <ul className="py-2">
                <li>
                  <a className="block px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                    Current Date
                  </a>
                </li>
                <li>
                  <a className="block px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                    Add Event
                  </a>
                </li>
                <li className="bg-gray-300 w-full h-px"></li>
                <li>
                  <a className="block px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                    Viwe Day
                  </a>
                </li>
                <li>
                  <a className="block px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                    Viwe Week
                  </a>
                </li>
                <li>
                  <a className="block px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                    Viwe month
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 bg-white rounded-lg">
          <div className="grid grid-cols-7  divide-gray-200 border-b border-gray-200">
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Sun</span>
              <span className="text-sm font-medium text-gray-900">09</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Mon</span>
              <span className="text-sm font-medium text-gray-900">10</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Tue</span>
              <span className="text-sm font-medium text-gray-900">11</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Wed</span>
              <span className="text-sm font-medium text-gray-900">12</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Thu</span>
              <span className="text-sm font-medium text-gray-900">13</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between border-r border-gray-200">
              <span className="text-sm font-medium text-gray-500">Fri</span>
              <span className="text-sm font-medium text-gray-900">14</span>
            </div>
            <div className="p-3.5 flex flex-col sm:flex-row items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Sat</span>
              <span className="text-sm font-medium text-gray-900">15</span>
            </div>
          </div>
          <div className="grid grid-cols-7 divide-gray-200">
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">27</span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">28</span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">29</span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">30</span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-b border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">31</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">1</span>
            </div>
            <div className="p-3.5  border-b border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">2</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">3</span>
              <span className="hidden lg:block text-xs font-medium text-gray-500">Meeting with marketing department</span>
              <span className="lg:hidden w-2 h-2 rounded-full bg-gray-400"></span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">4</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">5</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">6</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">7</span>
              <span className="hidden lg:block text-xs font-medium text-gray-500">Developer Meetup</span>
              <span className="lg:hidden w-2 h-2 rounded-full bg-gray-400"></span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">8</span>
            </div>
            <div className="p-3.5  border-b  border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">9</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">10</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">11</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-white flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600">12</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">13</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">14</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">15</span>
            </div>
            <div className="p-3.5  border-b border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">16</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">17</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">18</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">19</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">20</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">21</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">22</span>
            </div>
            <div className="p-3.5  border-b border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">23</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">24</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">25</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">26</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">27</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">28</span>
            </div>
            <div className="p-3.5  border-b border-r border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">29</span>
            </div>
            <div className="p-3.5  border-b border-gray-200   xl:aspect-auto  lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">30</span>
            </div>
            <div className="p-3.5    xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-900 flex items-center justify-center w-7 h-7 rounded-full ">31</span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">1</span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">2</span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">3</span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">4</span>
              <span className="hidden lg:block text-xs font-medium text-gray-500">Meet with friends <br/> 9PM</span>
              <span className="lg:hidden w-2 h-2 rounded-full bg-gray-400"></span>
            </div>
         
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">5</span>
            </div>
            <div className="p-3.5 bg-gray-50   xl:aspect-auto  lg:h-28 border-r border-gray-200 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100">
              <span className="text-xs font-semibold text-gray-500 flex items-center justify-center w-7 h-7 rounded-full ">6</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:hidden py-8 px-2.5 ">
          <div className="bg-gray-50 w-full rounded-xl">
            <div className="p-3 w-full flex items-center justify-between group transition-all duration-300">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-900">Meet with friends</span>
                <div className="flex items-center gap-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8.99998V13L15 16M3 5.12132L5.10714 3M20.998 5.12657L18.8909 3.00525M20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 8.5817 7.58172 4.99998 12 4.99998C16.4183 4.99998 20 8.5817 20 13Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <span className="text-xs font-medium text-gray-600">9AM</span>
                </div>
              </div>
              <button className="py-1 px-2 rounded border border-gray-400 text-xs font-medium text-gray-900 opacity-0 transition-all duration-500 group-hover:opacity-100">Edit</button>
            </div>
          </div>
        </div>
        </div>
      </section>
    )
}

export default CalendarComponent