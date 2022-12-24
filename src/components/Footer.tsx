import { GithubLogo } from "phosphor-react";
import { LogoFooter } from "./LogoFooter";

export function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-t-gray-600 py-6 px-6 flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-6">
            
            <LogoFooter />

            

            <a
                className="text-gray-300 flex gap-2 leading-tight hover:text-green-500"
                href="https://github.com/IcaroApoloBR"
            >
                <GithubLogo size="18" />
                GitHub
            </a>

        </footer>
    )
}