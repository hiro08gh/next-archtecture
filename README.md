# Next.js architecture.

このリポジトリは Next.js (React) アプリケーションを構築していく上での、`コンポーネント設計`、`依存ルール`、`テスト方針`について考え言語化したものです。フロントエンド設計の`ベストプラクティス`未だに定まっていない分野でもあります。スケールして複雑化していくアプリケーションに対して、スケーラビティや保守性を意識して考えていきます。完全に個人の主観なので、所属企業やプロジェクトとは一切関係ありません。

## コンポーネント設計

`src/components` 配下のディレクトリ構成は以下になります。

```bash
src/components/
└── ui
```

### ui
このディレクトリでは汎用的な各パーツの集まりです。 Atomic Design だと Atomsとorganizms にあたります。各コンポーネント配下の構成は以下になります。ルールとして、ui ディレクトリでは必ず 各コンポーネント配下に Storybook の設定ファイルを配置します。
```
./components/ui/Avatar
├── Avatar.stories.tsx
├── Avatar.tsx
├── avatar.module.css
└── index.ts
```
