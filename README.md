<h1 align="center">
  <img src="https://github.com/AnoTherK-ATK/LHPOJ/blob/site/resources/icons/logo.png?raw=true" width="120px">
  <br>
  LHPOJ: Le Hong Phong Online Judge
</h1>
<p align="center">
  <a href="https://github.com/DMOJ/online-judge/actions?query=workflow%3Abuild">
    <img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/AnotherK-ATK/LHPOJ/build.yml?branch=master"/>
  </a>
  <a href="http://www.gnu.org/licenses/agpl-3.0">
    <img alt="License" src="https://img.shields.io/badge/license-AGPLv3.0-blue.svg"/>
  </a>
  <a href="https://dmoj.ca/about/discord/">
    <img src="https://img.shields.io/discord/677340492651954177?color=%237289DA&label=Discord"/>
  </a>
</p>

**LHPOJ (Le Hong Phong Online Judge)** is a customized fork of [DMOJ](https://github.com/DMOJ/online-judge), built to serve the needs of Le Hong Phong High School for the Gifted’s programming community.

This fork is adapted from [VNOJ](https://github.com/VNOI-Admin/OJ), which is used by [VNOI](https://team.vnoi.info/) for programming contests and education.

See it live at [LHPOJ](https://github.com/AnoTherK-ATK/LHPOJ/tree/site)!

## Features

Check out LHPOJ's base features [here](https://github.com/DMOJ/online-judge#features), inherited from DMOJ.

## Installation

Refer to the install documentation [here](https://vnoi-admin.github.io/vnoj-docs/#/site/installation). Almost all installation steps remain the same as the docs, but there are several minor differences, including cloning this repo instead of DMOJ's repo.

### Additional installation steps

- You **have to** define `DMOJ_PROBLEM_DATA_ROOT` in `local_settings.py`, which should be the path to the directory that contains your problems' tests.

- Regarding disabling full-text search, please read [this issue](https://github.com/VNOI-Admin/OJ/issues/4) for more information.

- To sync the judge server and the site's cache, change the cache framework (`CACHES`) to `memcached` or `redis` instead of the default (local-memory caching).

- If you use `python3 manage.py loaddata demo`, the home button in the admin dashboard (/admin) links you to `localhost:8081`, there are 2 ways to change that:

  1. You can change that in [demo.json](/judge/fixtures/demo.json)
  2. You can go to the admin page, scroll down to find the `Sites` setting and change `localhost:8081` to your domain.

- To support `testlib.h`, you need to copy [testlib.h](https://github.com/MikeMirzayanov/testlib/blob/master/testlib.h) to `g++`'s include path in the judge server. To speed up compile time, you can also create a precompiled header for `testlib.h`.

## Contributing ![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)

Take a look at [our contribution guideline](contributing.md).

If you find any bug, please feel free to contact us via Discord [![Discord Chat](https://img.shields.io/discord/660930260405190688?color=%237289DA&label=Discord&logo=Discord)](https://discord.gg/TDyYVyd) or open an issue.

Pull requests are welcome as well. Before you submit your PR, please check your code with [flake8](https://flake8.pycqa.org/en/latest/) and format it if needed. There's also `prettier` if you need to format JS code (in `websocket/`).

Translation contributions are also welcome.
