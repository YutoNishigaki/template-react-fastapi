# bun1.1.7のイメージをダウンロード
FROM oven/bun:1.1.7


WORKDIR /app

# package.jsonの定義ファイルをコピー
COPY ./package.json ./

# 依存関係のインストール
RUN bun install
