# STYLE GUIDE

## Formatting and Linting ##

This project uses ESLint and Prettier.

Check out the `package.json` for a complete list of scripts. To run the full formatting and linting process quickly, use: 

```npm run format``` 

## File Names

File name should be camelCase: 

`fetchData.js` not `fetch_data.js`

## React Exports

Avoid `export default` in production. 
Be intentional that import and export names match in React.

## React Imports

This projects React imports are sorted for readability.

### Actual Style

``` javascript
import React, { useEffect } from "react";
//
import { useStore } from "zustand"
//
import SystemPrompt from "./systemPrompt";
import { seeds } from "../../utility/seeds";
import { SeedPaper } from "./login_styles";
import { BasicBox, OutlinePaper } from "../../mui/reusable";
//
import { Typography } from "@mui/material"
//
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
// ----------------------------------------------------------------------
```

### Annotated for Clarity

``` javascript
// react
import React, { useEffect } from "react";

// stuff from libraries
import { useStore } from "zustand"

// components, utilities, and close relatives
import SystemPrompt from "./systemPrompt";
import { seeds } from "../../utility/seeds";
import { SeedPaper } from "./login_styles";
import { BasicBox, OutlinePaper } from "../../mui/reusable";

// components from MUI 5
import { Typography } from "@mui/material"

// MUI 5 iconography
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

// divider line
// ----------------------------------------------------------------------
