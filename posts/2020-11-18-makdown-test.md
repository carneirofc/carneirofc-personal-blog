---
background: "#1f1f1f"
color: "#f1f1f1"
category: Misc
date: 2020-11-18 19:00:00
description: Dont mind ....
title: First Markdown Post
---
# ![remark][logo]

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**remark** is a Markdown processor built on [micromark][] powered by
[plugins][] part of the [unified][] collective.

## Intro

**remark** is [the world’s most popular Markdown parser][popular]!
And it does so much more than parse: it inspects (check, lint) and transforms
(generate, compile) Markdown too!

Everything is possible with plugins, such as [checking Markdown code
style (`remark-lint`)][remark-lint], [transforming safely to React
(`remark-react`)][remark-react], [adding a table of
contents (`remark-toc`)][remark-toc], or [compiling to man pages
(`remark-man`)][remark-man].

Internally, remark now uses [micromark][], a new, fast, and tiny CommonMark
compliant Markdown tokenizer.
It can be GFM compliant with [`remark-gfm`][remark-gfm].

Finally, remark is part of the [unified][website] [collective][governance].
Learn more about us:

*   Visit [`unifiedjs.com`][website] and peruse its [Learn][] section for an
    overview
*   Read [unified][]’s readme for a technical intro
*   Browse [awesome remark][awesome] to find out more about the ecosystem
*   Follow us on [Twitter][] to see what we’re up to
*   Check out [Contribute][] below to find out how to help out

## Packages

This repository contains the following packages:

*   [`remark-parse`][parse] — Parse Markdown to syntax trees
*   [`remark-stringify`][stringify] — Serialize syntax trees to Markdown
*   [`remark`][api] — Programmatic interface with both `remark-parse` and `remark-stringify`
*   [`remark-cli`][cli] — Command line interface wrapping `remark`
