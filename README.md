This is a Wordle clone project.

## Spec

### MVP
- 作為一個 game owner，會有一個五個英文字的答案
- 作為一個 user，我可以看到畫面上有 5x6 個方格子
- 作為一個 user，我可以用鍵盤輸入英文單字，可以刪除，不能輸入其他符號、數字
- 作為一個 user，我可以在格子中看到我輸入的單字，一次最多五個英文字（一行）
- 作為一個 user，當我輸入一個英文單字後，可以按下 enter 送出，會看到格子根據答案的比較，翻轉變成灰色（沒有中任何一個字）、黃色（字是對的位置不對）跟綠色（字跟位置都對）三種顏色
- 作為一個 user，如果輸入的單字不正確，可以於下一行繼續輸入，最多輸入六次
- 作為一個 user，如果輸入的單字正確，會跳出一個恭喜視窗


### Tasks 
- [ ] layout (**@tiffany**)
- [ ] 5x6 個方格子+灰綠黃 (**@michael**)
- [ ] Wordle 演算法 (**@louis**)
- [ ] 鍵盤 UI (**@shane**)
- [ ] 鍵盤 event (**@debby**)
- [ ] 建立題庫 (word list)
- [ ] 答對視窗
- [ ] how to play
- [ ] setting page

Nice to have
- 作為一個 user，如果輸入的單字正確，會跳出一個恭喜視窗，點擊上面的分享，可以複製這個結果，並以 emoji 呈現

### Memo

Louis > libs 底下的 `words.js` 是詞庫, `solve.js` 是比對演算法




## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
