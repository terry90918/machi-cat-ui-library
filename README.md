# 目錄結構

```
machi-cat-ui-library/
|-- package/
|  |-- button/
|  |-- version/
|  |-- index.js
|  |-- postcss.config.js
|  |-- tailwind.config.js
|  |-- vite.config.js
|-- dist/
|-- site/
|  |-- dist/
|  |-- public/
|  |-- src/
|  |  |-- assets/
|  |  |-- components/
|  |  |-- router/
|  |  |-- store/
|  |  |-- views/
|  |  |-- App.vue
|  |  |-- main.js
|  |-- .gitignore
|  |-- index.html
|  |-- vite.config.js
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
```

- components/：這個目錄包含了所有的 Vue.js 組件，如 button/ 和 version/。index.js 是這些組件的入口檔案，vite.config.js 是 Vite 的配置檔案。
- dist/：這個目錄是 Vite 打包後的產出目錄，包含了所有打包後的靜態檔案。
- site/：這個目錄可能是用來放置專案的官方網站或者是示例網站。
  - dist/：這個目錄是 Vite 打包後的產出目錄，包含了所有打包後的靜態檔案。
  - public/：這個目錄包含了所有的公共檔案，如圖片、字體等。
  - src/：這個目錄包含了所有的源碼檔案，如 Vue.js 組件、路由配置、Vuex 儲存庫、視圖等。
  - index.html：這是專案的入口 HTML 檔案。
  - vite.config.js：這是 Vite 的配置檔案。
- .gitignore：這個檔案是用來告訴 Git 哪些檔案或目錄不應該被版本控制系統追蹤。
- package-lock.json 和 package.json：這兩個檔案是用來管理專案的依賴包。
- README.md：這個檔案通常用來說明專案的安裝、使用方法等資訊。
