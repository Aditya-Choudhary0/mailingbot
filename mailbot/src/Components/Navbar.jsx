import { useColorMode } from "@chakra-ui/react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className={`w-full border border-solid ${colorMode === 'light' ? 'border-gray-300 bg-white' : 'border-gray-900 bg-gray-900'} py-6 px-8 flex justify-between items-center`}>
            <h1 className={`text-lg font-semibold ${colorMode === 'light' ? 'text-gray-700' : 'text-white'}`}>Onebox</h1>
            <div className="flex justify-between gap-5">
                <div className="relative">
                    <input
                        type="checkbox"
                        id="change-theme"
                        className="hidden"
                        onChange={toggleColorMode}
                        checked={colorMode === 'dark'}
                    />
                    <label htmlFor="change-theme" className={`flex items-center rounded-full w-16 border border-solid ${colorMode === 'light' ? 'bg-gray-200 justify:end' : 'bg-gray-800 justify:start'} border-gray-300 px-3 py-2 cursor-pointer`}>
                        <span className={`flex items-center p-1 absolute ml-2 left-0 bg-white w-6 h-6 rounded-full shadow-md transition-transform ${colorMode === 'dark' ? 'transform translate-x-full' : ''}`}> {colorMode === 'light'? <MdLightMode className="text-yellow-500" />:<MdOutlineDarkMode className="text-yellow-500" />}</span>
                        {colorMode === 'light' ? <MdOutlineDarkMode className="text-yellow-500" />:<MdLightMode className="text-yellow-500" />}
                        {/* {colorMode === 'dark' && <MdLightMode className="text-yellow-500" />} */}
                    </label>
                </div>
                <select className={`border border-solid rounded px-4 py-2 ${colorMode === 'light' ? 'bg-gray-200' : 'bg-gray-800'} border-gray-300 focus:outline-none`}>
                    <option value="tims_workspace">Tim's Workspace</option>
                </select>
            </div>
        </div>
    );
};
