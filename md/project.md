# 一、初始化

## 1、`npm init -y`

2、 安装

```
yarn add next react react-dom

// 配置ts
yarn add @types/node @types/react @types/react-dom typescript -D
```

新建`tsconfig.json`

```
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": "./src",
    "downlevelIteration": true
  },
  "exclude": ["node_modules"],
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]
}

```

新建`next-env.d.ts` 确保 TypeScript 编译器选择 Next.js 的类型信息

```
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

```

修改`Script`命令

```
{
    ...

    "scripts": {
        "dev": "yarn && next -p 3499",
        "build": "next build",
        "start": "next start -p 3499",
        "lint": "next lint"
    },
  ...

}

```

在根目录下创建`pages`文件夹 并新建`index.tsx`

```
import React from 'react'
// import styles from '../styles/Home.module.css'

const Home: any = () => {
  return (
    <div >
      首页
    </div>
  )
}

export default Home

```

运行`yarn dev` 然后可以在 `http://localhost:port/ ` 看到新建的页面
