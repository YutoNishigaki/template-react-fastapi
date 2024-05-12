# postgres16のイメージをダウンロード
FROM postgres:16

# ロケールの追加
RUN apt-get update && apt-get install -y locales && rm -rf /var/lib/apt/lists/*
RUN sed -i -e 's/# ja_JP.UTF-8 UTF-8/ja_JP.UTF-8 UTF-8/' /etc/locale.gen && locale-gen

# Time ZoneAc
ENV TZ Asia/Tokyo

# Language
ENV LANG=ja_JP.UTF-8
ENV LANGUAGE=ja_JP:ja
ENV LC_ALL=ja_JP.UTF-8

