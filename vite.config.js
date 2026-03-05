import { defineConfig } from "vite";
import path, {resolve} from "node:path";
import * as glob from "glob";

import HtmlCssPurgePlugin from "vite-plugin-purgecss";
import HandlebarsPlugin from "vite-plugin-handlebars";

import getData from "./data/index";


function obtenerHtmlFiles(){
    return Object.fromEntries(
        glob.sync(
            './**/*.html',
            {
                ignore: [
                    './dist/**',
                    './node_modules/**'
                ]
            }
        ).map( (file) => {
            return [
                file.slice(0, file.length - path.extname(file).length),
                resolve(__dirname, file)
            ];
        })
    );
}

export default defineConfig(
    {
        appType: 'mpa',
        build: {
            rollupOptions: {
                input: obtenerHtmlFiles(),
            }
        },
        plugins: [
            HandlebarsPlugin({
                partialDirectory: resolve(__dirname, 'components'),
                context: (page)=>{
                    return getData(page);
                }
            }),
            HtmlCssPurgePlugin(),
        ]
    }
);