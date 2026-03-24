# 室内设计作品集网站（可免费部署到 Vercel）

这个项目已经是可直接部署的静态网站。

## 你现在只要做这 5 步

1. 注册 GitHub: https://github.com/signup
2. 在 GitHub 新建一个仓库（例如：`interior-portfolio`）
3. 把这个文件夹上传到仓库  
   - 点仓库里的 **Add file** -> **Upload files**  
   - 把当前文件夹内所有文件拖进去并提交
4. 注册 Vercel: https://vercel.com/signup （建议用 GitHub 登录）
5. 在 Vercel 点 **Add New...** -> **Project** -> 选择这个仓库 -> **Deploy**

部署成功后，Vercel 会给你一个公开网址，例如：
`https://interior-portfolio.vercel.app`

## 你需要替换的内容

- `index.html` 中：
  - 品牌名 `ATELIER INTERIOR`
  - “关于我”内容
  - 作品标题和描述
  - 联系方式（微信/邮箱/电话）

## 如何替换作品图片

当前是占位渐变图。后续可把真实图片放到 `assets/` 文件夹，再在 `styles.css` 的 `.tone-* .thumb` 中改为：

```css
.tone-1 .thumb {
  background-image: url("assets/project-01.jpg");
}
```
