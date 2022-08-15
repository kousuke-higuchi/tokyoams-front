# 東京都AMS フロントエンド

## 開発環境

* node.js
* Vue3
* Nuxt.js3 RC
* vuetify3 beta
* axios

## 開発ツール（推奨）

* VisualStudio Code
* VSCode拡張
    * Vue Language Features(Volar)
    * Remote-development
    * Remote-WSL（これも必要？）

## 開発環境 構築手順

ここでは、Windows＋WSL2（Ubuntu）の環境を前提としています。
特に指定が無ければ、コマンドはすべてシェル（WSL2）上で行っているものとして読み取って下さい。

1. Windows環境の場合、WSL2（Ubuntu）をインストールします。
2. シェル（WSL2）上で下記コマンドを実行します。
    ``` bash
    sudo apt-get update
    sudo apt-get upgrade -y
    sudo apt-get install -y nodejs npm
    sudo ln -sf /usr/local/bin/node /usr/bin/node
    sudo apt-get purge -y nodejs npm
    ```
3. ソースをgitリポジトリから取得します。
    * VSCode拡張機能のgitクライアントを利用する場合（速度優先）
        ```
        cd ~/
        git clone ＜リポジトリURL＞
        ```
    * 開発中にWindowsホスト上でファイル操作・git操作を行いたい場合は、Windowsホスト上のgitクライアントでclone操作を行います。（デバッグ時のパフォーマンスが低下します）

4. 3で取得したソースをVSCodeで開きます。
    ```
    cd ＜3で作成されたディレクトリ＞
    code .
    ```
5. `.env.example`ファイルを同じ階層にコピーします。（ファイル名を`.env`とします）
6. エディタ等で.envファイルを開き、 `VITE_API_BASE_URL`の値に
バックエンドとなるREST APIサーバのアドレスを`http://...`の形で記載します。
    ```
    VITE_API_BASE_URL=http://192.168.1.xxx:8080
    ```
    なお、上記はフロント部を基準にしたバックエンドのアドレスになります。intelliJ IDEAで起動したバックエンドを使用する場合、WindowsホストのLAN上でのアドレスを記載しないと、通信ができませんので、繋がらない場合は参考下さい。
7. ログイン認証を無効にする場合には、以下を`.env`に追記します。
    ```
    VITE_REQUIRE_AUTH=false
    ```

### Windows+WSL2でデバッグが遅い原因と対策（参考）

WSL2環境の`/mnt/c`以下にプロジェクト一式を置いていると、デバッグ開始やリロードが遅くなったり、反応しなくなったりすることがあります。
この資料の例ではプロジェクトを`~/`に配置することで改善しています。

※参考
https://dev.classmethod.jp/articles/wsl2-vue-js-hot-reload/

## デバッグ・ビルド手順

### パッケージのインストール

ソースコードを初めて取得した場合や、package.jsonが変更された場合に実行します。

```bash
cd （プロジェクトのルートディレクトリ）/tokyoams-front

yarn install
```


### デバッグ開始

```bash
cd ＜プロジェクトディレクトリ＞/tokyoams-front #

yarn dev -o
# Webサーバが起動後、ブラウザにフロントエンド画面が表示されます。
# サーバはシェル上でCtrl+Cを押す事で終了します。
```

上記コマンドを実行後（Webサーバが起動している間）は、**原則**コマンドを繰り返し実行しなくても自動的に修正内容が随時反映されます。→ホットリロード

### ビルド

実行後、公開用のHTML、CSS、javascript等が出力されます。

1. 静的サイト（SSG）の生成
    ```bash
    yarn generate
    # 実行後、.output/public下に成果物が生成される
    ```

2. 通常のビルドコマンド（おそらく使用しない）
    ```bash
    cd ＜プロジェクトディレクトリ＞/tokyoams-front
    yarn build
    ```

## ディレクトリ構成

ディレクトリ構成はnuxt3に準拠しています。詳細は公式ガイド（ https://v3.nuxtjs.org/guide/directory-structure/nuxt ）を参照ください。

## 参考情報

* Nuxt3 ・・・ルーティング、ページ生成など構築の根幹になる部分を担当
    * https://v3.nuxtjs.org/guide/concepts/introduction
* vuetify3・・・主に画面部品・CSSスタイルなど外観に関する部分を担当
    * https://next.vuetifyjs.com/en/components/all/
    * 左側のメニューにAPIやスタイル関係の項目があります。