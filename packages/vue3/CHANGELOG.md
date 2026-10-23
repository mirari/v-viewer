# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## 5.0.0 (2026-10-23)

### ⚠ BREAKING CHANGES

- rebuild v-viewer for Vue 2 and Vue 3
- redesign component bindings and DOM observation
- simplify useViewer to image-array galleries

### Features

- add Vue slots for toolbar icons and custom controls ([3d80159](https://github.com/mirari/v-viewer/commit/3d80159d078acf23f42ca9cca1532c36eecff494))
- **docs:** expand demos to five initial and ten available images ([4a30e74](https://github.com/mirari/v-viewer/commit/4a30e7444cd19f09fc2e634934d1df8ec0d89460))
- **docs:** replace configurator heading with image controls ([95fc2da](https://github.com/mirari/v-viewer/commit/95fc2dabc7c4922cfa5f33298e68cafba0d827d1))
- redesign component bindings and DOM observation ([e0acd40](https://github.com/mirari/v-viewer/commit/e0acd40cb90697550801a927785c2c060f4ff2d6))
- support reactive rebuild option in directive bindings ([c76373c](https://github.com/mirari/v-viewer/commit/c76373c77b8ce91c7ce6c4747e72b0d4b87dd7a4))

### Bug Fixes

- **docs:** apply theme colors to native checkboxes ([e64d304](https://github.com/mirari/v-viewer/commit/e64d304fa96c100e536a5beefa9878bd15be12ed))
- **docs:** improve light theme button colors ([fa9e0e7](https://github.com/mirari/v-viewer/commit/fa9e0e74140655512b52fc861b390d7f5c06cb95))
- **docs:** prevent inline previews from stealing anchor scroll ([71ac2e9](https://github.com/mirari/v-viewer/commit/71ac2e93aa9a15e4ef195d3b3fe6482afb15889b))
- **docs:** restore toolbar demo transitions and icon styling ([51974bc](https://github.com/mirari/v-viewer/commit/51974bcc53247b664c784db9d48e25f9eccbc89c))
- **release:** format changelog before creating release commits ([3b6858c](https://github.com/mirari/v-viewer/commit/3b6858c1854b7d292a686c8743230f3a5820b4c3))

### Documentation

- add playground sections to usage page outlines ([c71492e](https://github.com/mirari/v-viewer/commit/c71492e07e13b8dec2fb14347aa3bb46245dc314))
- align configurator descriptions with Viewer.js reference ([d553bfa](https://github.com/mirari/v-viewer/commit/d553bfae04472553d2f6912ac813f38d078b7689))
- align usage page introductions with quick start ([e743c6e](https://github.com/mirari/v-viewer/commit/e743c6edb9df1a35f36eeb20c8d7c31e9de49f57))
- broaden API use case wording ([6db77fc](https://github.com/mirari/v-viewer/commit/6db77fc0658fa45ec5c8026651baa39531af5f36))
- centralize observe configuration guidance ([3c63c82](https://github.com/mirari/v-viewer/commit/3c63c821157a1112bc8ac0a32c409bb8aa6a69ff))
- clarify API hide and destroy behavior ([381c69c](https://github.com/mirari/v-viewer/commit/381c69c21189dbc22331ea4a2cfa8029dcf28f51))
- clarify component customization and automatic updates ([a1770da](https://github.com/mirari/v-viewer/commit/a1770da2e650de19ddbb8dbc901fa214d61739c7))
- clarify dependency and CSS changes for existing users ([2063fd7](https://github.com/mirari/v-viewer/commit/2063fd71ad992b873e2a6b5bfd3de5e31059ecfa))
- clarify dynamic content support in directive use case ([66191b9](https://github.com/mirari/v-viewer/commit/66191b99146e4ffc0f39b91d1d8d589c06c0b70d))
- clarify observed image elements in components and directives ([bc66386](https://github.com/mirari/v-viewer/commit/bc66386a46b5c85228ba9c8d0153f0132cdea484))
- clarify use cases for component directive and API ([2801481](https://github.com/mirari/v-viewer/commit/2801481d3bd3c33842279e59ddb1953b321cf289))
- consolidate API gallery examples ([9415714](https://github.com/mirari/v-viewer/commit/9415714e51c00e503ecfb25a21995d64ac31bb98))
- consolidate version-specific component upgrade notices ([4a1ac81](https://github.com/mirari/v-viewer/commit/4a1ac81bd9b8f9704a78beca426bf420ca7cd512))
- describe image viewer features in home headline ([7069f9b](https://github.com/mirari/v-viewer/commit/7069f9b8ebc73f1e7eacfc08138c63c6f4910243))
- distinguish API and directive callbacks from component events ([312203b](https://github.com/mirari/v-viewer/commit/312203b6b39c1c643059a03301827e1a3acbf4b5))
- distinguish native directive events and Viewer.js callbacks ([2e88f2d](https://github.com/mirari/v-viewer/commit/2e88f2df4817e8c93bbd628811e5da6e27827717))
- document Viewer.js options for API and directive ([10032af](https://github.com/mirari/v-viewer/commit/10032aff17c1c9bd0b1fa31425966f503601e76c))
- explain image observation batching and configuration ([696266a](https://github.com/mirari/v-viewer/commit/696266aa4b1cd82f77c84c4d04a426973182fd2b))
- group component slots under one section ([2748ae1](https://github.com/mirari/v-viewer/commit/2748ae1e37a4617e251c3d98c1518fbb78b23c89))
- highlight installation changes in upgrade warnings ([11ae67f](https://github.com/mirari/v-viewer/commit/11ae67fa5f1303278e347d5a2c1bbd8cb6717aa8))
- keep directive event guidance version-specific ([c46bfd9](https://github.com/mirari/v-viewer/commit/c46bfd9201d899f17354b63af2079ed2a13be000))
- link component events to Viewer.js reference ([6d2db3e](https://github.com/mirari/v-viewer/commit/6d2db3ec6a440ebefc203c499b3b8b8440723dc0))
- link quick start examples to usage guides ([568e205](https://github.com/mirari/v-viewer/commit/568e205e75301f86fb78da50ef2a6cd51651ced9))
- link to upstream Viewer.js stylesheet ([44b8a47](https://github.com/mirari/v-viewer/commit/44b8a47f9572812b25b3cef24676925ab3502120))
- localize Chinese example links from legacy blog ([295997c](https://github.com/mirari/v-viewer/commit/295997c37913da1a64d4ef83bae6323e62f02661))
- locate default Viewer.js stylesheet for customization ([9f50dc8](https://github.com/mirari/v-viewer/commit/9f50dc87bf1442b33b49246dfaa15155b61dcad2))
- move migration sections to the end and preserve anchor position ([7f81d5d](https://github.com/mirari/v-viewer/commit/7f81d5d4b7e2893e4ff3ad1046793cf5dd151c8b))
- move static modifier notice into directive migration section ([e440e5c](https://github.com/mirari/v-viewer/commit/e440e5ce9c0c49c1ee80fb90725dc986e2d4414c))
- number demo image assets consistently ([ab75e95](https://github.com/mirari/v-viewer/commit/ab75e95fba2223bbd48eb8227a0f545eb33f9329))
- omit redundant Vue version names in event guidance ([e07fdf5](https://github.com/mirari/v-viewer/commit/e07fdf5d1aa4a368a28094a5444962bbc2c38c72))
- place directive bindings before options ([d8158a2](https://github.com/mirari/v-viewer/commit/d8158a2cc04371f483f42f623a718968bb318825))
- remove basic CSS scoping explanations ([1d70235](https://github.com/mirari/v-viewer/commit/1d70235d44e997483db766579b4abf5f992cd43e))
- remove implementation discussion from user guidance ([b3dbffc](https://github.com/mirari/v-viewer/commit/b3dbffccaee3de6f5528b0c3d16554fbd3513f1d))
- remove redundant default slot compatibility note ([5da255f](https://github.com/mirari/v-viewer/commit/5da255fad043bcdc92efe1349a42b8967bcdeb65))
- remove redundant quick start introduction ([602f7a0](https://github.com/mirari/v-viewer/commit/602f7a0900f1869bcf8c08c6ef5074051af5fe83))
- remove redundant unstyled import guidance ([24d6079](https://github.com/mirari/v-viewer/commit/24d6079c9909326a0f0c2191f1f7904963a1b70d))
- rename legacy migration section ([1bf80db](https://github.com/mirari/v-viewer/commit/1bf80db28c8929928674817cbc7ac50cec6d5ed0))
- separate options and events and filter API inline settings ([58cff3f](https://github.com/mirari/v-viewer/commit/58cff3f9a7d3dd971767e6cd8a191cf1617f16c6))
- shorten migration section headings ([aed350a](https://github.com/mirari/v-viewer/commit/aed350a1eceabdf55ed80edb93cceb828c05c265))
- simplify component migration section to examples ([45fb8e0](https://github.com/mirari/v-viewer/commit/45fb8e047096ce6476c284129d77031480a7646d))
- simplify component upgrade description ([168eaff](https://github.com/mirari/v-viewer/commit/168eaff4fb56ce7d29006035445f06fbfa5a8302))
- simplify directive event listening guidance ([26d0735](https://github.com/mirari/v-viewer/commit/26d0735925ffdf29a1a56b3750434518cba7405e))
- synchronize upgrade notice wording ([046fbac](https://github.com/mirari/v-viewer/commit/046fbac198b3a1b09f3ef98ae3e661d9272ad2e3))
- use npm for package installation examples ([e9fe1d9](https://github.com/mirari/v-viewer/commit/e9fe1d9ed01d68ea613f11f9314fcd4a9beeb00d))
- use separate thumbnails and originals in API examples ([3c49957](https://github.com/mirari/v-viewer/commit/3c49957f285492d318fed72e0c4296848a044ced))
- use thumbnails in component and directive examples ([47d99b8](https://github.com/mirari/v-viewer/commit/47d99b838f10806f18020e380e30fd11a665c26c))

### Code Refactoring

- **docs:** focus configurator on observable effects ([c48cbde](https://github.com/mirari/v-viewer/commit/c48cbde6bff157bfcbe118a5348dc6393b3f10a6))
- **docs:** remove quick start configuration code output ([d705632](https://github.com/mirari/v-viewer/commit/d70563218a7b1b2eed9a6f0604c8bd16763d2b5e))
- rebuild v-viewer for Vue 2 and Vue 3 ([fbd8d0c](https://github.com/mirari/v-viewer/commit/fbd8d0cc4985042d84b054acf485def5225540d0))
- simplify toolbar customization to two slots ([236e7b3](https://github.com/mirari/v-viewer/commit/236e7b3caa822f473151da3dda8a48d2939eae0c))
- simplify useViewer to image-array galleries ([ca66c92](https://github.com/mirari/v-viewer/commit/ca66c929ceee1e7b206739de4c4e8213191970b9))

# Changelog

Changes for the new Vue 3 version line.
