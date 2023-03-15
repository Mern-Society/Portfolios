(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[143],{1040:function(e,n,a){"use strict";var t=a(0),r=a.n(t),o=a(53),i=a(1043),l=a(573),c=a(27),m=a.n(c),s=a(2),p=m()((function(){return{pageFull:{width:"100%"}}}));n.a=function(e){var n=e.heading,a=e.breadcrumbs,t=e.children,c=e.className,m=e.restProps,u=p();return r.a.createElement(l.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(o.a,Object.assign({className:Object(s.default)(u.pageFull,c)},m),(n||a)&&r.a.createElement(i.d,{heading:n,breadcrumbComponent:a&&r.a.createElement(i.c,{items:a})}),t))}},1043:function(e,n,a){"use strict";a.d(n,"d",(function(){return d})),a.d(n,"c",(function(){return g})),a.d(n,"a",(function(){return C})),a.d(n,"b",(function(){return k}));var t=a(17),r=a(8),o=a(0),i=a.n(o),l=a(119),c=a(53),m=a(106),s=a(2),p=["heading","breadcrumbComponent","children"],u=Object(l.a)((function(e){return{pageHeaderRoot:Object(r.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(r.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),d=function(e){var n=e.heading,a=e.breadcrumbComponent,r=e.children,o=Object(t.a)(e,p),l=u();return i.a.createElement(c.a,Object.assign({className:Object(s.default)(l.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},o),i.a.createElement(m.a,{component:"div",variant:"h1",className:Object(s.default)(l.titleRoot,"title")},n),i.a.createElement(c.a,{ml:{sm:"auto"}},a),r)},f=a(1083),h=a(60),S=["items"],b=Object(l.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),g=function(e){var n=e.items,a=(Object(t.a)(e,S),b());return i.a.createElement(f.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},n.map((function(e,n){return e.isActive?i.a.createElement(m.a,{key:n,className:a.textSm,color:"textPrimary"},e.label):i.a.createElement(h.c,{key:n,className:Object(s.default)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},v=a(899),D=a(35),E=a(180),y=a(1040),C=function(e){var n=e.SourceCodeComponent,a=e.SettingsComponent,t=e.children;return i.a.createElement(y.a,null,i.a.createElement(E.a,null,i.a.createElement(v.a,{item:!0,xs:12,md:7},i.a.createElement(d,{heading:"Preview"}),i.a.createElement(c.a,{mb:8},t),i.a.createElement(D.a,null,n)),i.a.createElement(v.a,{item:!0,xs:12,md:5},a)))},O=a(1045),k=function(e){var n=e.pageTitle,a=e.menus,t=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:n,isActive:!0}];return i.a.createElement(O.a,{pageTitle:n,breadcrumbs:r,menus:a},t)}},1045:function(e,n,a){"use strict";var t=a(8),r=a(0),o=a.n(r),i=a(53),l=a(957),c=a(106),m=a(892),s=a(893),p=a(949),u=a(119),d=a(1040),f=Object(u.a)((function(e){var n;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(n={width:"100%"},Object(t.a)(n,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(t.a)(n,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),n),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));n.a=function(e){var n=e.pageTitle,a=e.menus,t=e.breadcrumbs,r=e.children,u=f();return o.a.createElement(d.a,{heading:n,breadcrumbs:t},o.a.createElement(i.a,{className:u.root},o.a.createElement(i.a,{className:u.contentArea},r),o.a.createElement(l.a,{xsDown:!0},o.a.createElement(i.a,{className:u.contentSidebar},o.a.createElement(c.a,{component:"h4",variant:"h4"},"Contents"),o.a.createElement(m.a,null,a.map((function(e,n){return o.a.createElement(s.a,{key:n,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},o.a.createElement(p.a,{primary:e.label}))})))))))}},2933:function(e,n,a){var t={"./OpenIconSpeedDial.txt":2934,"./SimpleSpeedDials.txt":2935,"./SpeedDialTooltipOpen.txt":2936};function r(e){var n=o(e);return a(n)}function o(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=o,e.exports=r,r.id=2933},2934:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Button from '@material-ui/core/Button';\r\nimport SpeedDial from '@material-ui/lab/SpeedDial';\r\nimport SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';\r\nimport SpeedDialAction from '@material-ui/lab/SpeedDialAction';\r\nimport FileCopyIcon from '@material-ui/icons/FileCopyOutlined';\r\nimport SaveIcon from '@material-ui/icons/Save';\r\nimport PrintIcon from '@material-ui/icons/Print';\r\nimport ShareIcon from '@material-ui/icons/Share';\r\nimport FavoriteIcon from '@material-ui/icons/Favorite';\r\nimport EditIcon from '@material-ui/icons/Edit';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    height: 380,\r\n    transform: 'translateZ(0px)',\r\n    flexGrow: 1,\r\n  },\r\n  speedDial: {\r\n    position: 'absolute',\r\n    bottom: theme.spacing(2),\r\n    right: theme.spacing(2),\r\n  },\r\n}));\r\n\r\nconst actions = [\r\n  { icon: <FileCopyIcon />, name: 'Copy' },\r\n  { icon: <SaveIcon />, name: 'Save' },\r\n  { icon: <PrintIcon />, name: 'Print' },\r\n  { icon: <ShareIcon />, name: 'Share' },\r\n  { icon: <FavoriteIcon />, name: 'Like' },\r\n];\r\n\r\nexport default function OpenIconSpeedDial() {\r\n  const classes = useStyles();\r\n  const [open, setOpen] = React.useState(false);\r\n  const [hidden, setHidden] = React.useState(false);\r\n\r\n  const handleVisibility = () => {\r\n    setHidden(prevHidden => !prevHidden);\r\n  };\r\n\r\n  const handleOpen = () => {\r\n    setOpen(true);\r\n  };\r\n\r\n  const handleClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Button onClick={handleVisibility}>Toggle Speed Dial</Button>\r\n      <SpeedDial\r\n        ariaLabel=\"SpeedDial openIcon example\"\r\n        className={classes.speedDial}\r\n        hidden={hidden}\r\n        icon={<SpeedDialIcon openIcon={<EditIcon />} />}\r\n        onClose={handleClose}\r\n        onOpen={handleOpen}\r\n        open={open}>\r\n        {actions.map(action => (\r\n          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />\r\n        ))}\r\n      </SpeedDial>\r\n    </div>\r\n  );\r\n}\r\n"},2935:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\r\nimport FormLabel from '@material-ui/core/FormLabel';\r\nimport Radio from '@material-ui/core/Radio';\r\nimport RadioGroup from '@material-ui/core/RadioGroup';\r\nimport Switch from '@material-ui/core/Switch';\r\nimport SpeedDial from '@material-ui/lab/SpeedDial';\r\nimport SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';\r\nimport SpeedDialAction from '@material-ui/lab/SpeedDialAction';\r\nimport FileCopyIcon from '@material-ui/icons/FileCopyOutlined';\r\nimport SaveIcon from '@material-ui/icons/Save';\r\nimport PrintIcon from '@material-ui/icons/Print';\r\nimport ShareIcon from '@material-ui/icons/Share';\r\nimport FavoriteIcon from '@material-ui/icons/Favorite';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    transform: 'translateZ(0px)',\r\n    flexGrow: 1,\r\n  },\r\n  exampleWrapper: {\r\n    position: 'relative',\r\n    marginTop: theme.spacing(3),\r\n    height: 380,\r\n  },\r\n  radioGroup: {\r\n    margin: theme.spacing(1, 0),\r\n  },\r\n  speedDial: {\r\n    position: 'absolute',\r\n    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {\r\n      bottom: theme.spacing(2),\r\n      right: theme.spacing(2),\r\n    },\r\n    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {\r\n      top: theme.spacing(2),\r\n      left: theme.spacing(2),\r\n    },\r\n  },\r\n}));\r\n\r\nconst actions = [\r\n  { icon: <FileCopyIcon />, name: 'Copy' },\r\n  { icon: <SaveIcon />, name: 'Save' },\r\n  { icon: <PrintIcon />, name: 'Print' },\r\n  { icon: <ShareIcon />, name: 'Share' },\r\n  { icon: <FavoriteIcon />, name: 'Like' },\r\n];\r\n\r\nexport default function SimpleSpeedDials() {\r\n  const classes = useStyles();\r\n  const [direction, setDirection] = React.useState('up');\r\n  const [open, setOpen] = React.useState(false);\r\n  const [hidden, setHidden] = React.useState(false);\r\n\r\n  const handleDirectionChange = event => {\r\n    setDirection(event.target.value);\r\n  };\r\n\r\n  const handleHiddenChange = event => {\r\n    setHidden(event.target.checked);\r\n  };\r\n\r\n  const handleClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  const handleOpen = () => {\r\n    setOpen(true);\r\n  };\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <FormControlLabel control={<Switch checked={hidden} onChange={handleHiddenChange} color=\"primary\" />} label=\"Hidden\" />\r\n      <FormLabel className={classes.radioGroup} component=\"legend\">\r\n        Direction\r\n      </FormLabel>\r\n      <RadioGroup aria-label=\"direction\" name=\"direction\" value={direction} onChange={handleDirectionChange} row>\r\n        <FormControlLabel value=\"up\" control={<Radio />} label=\"Up\" />\r\n        <FormControlLabel value=\"right\" control={<Radio />} label=\"Right\" />\r\n        <FormControlLabel value=\"down\" control={<Radio />} label=\"Down\" />\r\n        <FormControlLabel value=\"left\" control={<Radio />} label=\"Left\" />\r\n      </RadioGroup>\r\n      <div className={classes.exampleWrapper}>\r\n        <SpeedDial\r\n          ariaLabel=\"SpeedDial example\"\r\n          className={classes.speedDial}\r\n          hidden={hidden}\r\n          icon={<SpeedDialIcon />}\r\n          onClose={handleClose}\r\n          onOpen={handleOpen}\r\n          open={open}\r\n          direction={direction}>\r\n          {actions.map(action => (\r\n            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />\r\n          ))}\r\n        </SpeedDial>\r\n      </div>\r\n    </Box>\r\n  );\r\n}\r\n"},2936:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Button from '@material-ui/core/Button';\r\nimport Backdrop from '@material-ui/core/Backdrop';\r\nimport SpeedDial from '@material-ui/lab/SpeedDial';\r\nimport SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';\r\nimport SpeedDialAction from '@material-ui/lab/SpeedDialAction';\r\nimport FileCopyIcon from '@material-ui/icons/FileCopyOutlined';\r\nimport SaveIcon from '@material-ui/icons/Save';\r\nimport PrintIcon from '@material-ui/icons/Print';\r\nimport ShareIcon from '@material-ui/icons/Share';\r\nimport FavoriteIcon from '@material-ui/icons/Favorite';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    height: 380,\r\n    transform: 'translateZ(0px)',\r\n    flexGrow: 1,\r\n  },\r\n  speedDial: {\r\n    position: 'absolute',\r\n    bottom: theme.spacing(2),\r\n    right: theme.spacing(2),\r\n  },\r\n}));\r\n\r\nconst actions = [\r\n  { icon: <FileCopyIcon />, name: 'Copy' },\r\n  { icon: <SaveIcon />, name: 'Save' },\r\n  { icon: <PrintIcon />, name: 'Print' },\r\n  { icon: <ShareIcon />, name: 'Share' },\r\n  { icon: <FavoriteIcon />, name: 'Like' },\r\n];\r\n\r\nexport default function SpeedDialTooltipOpen() {\r\n  const classes = useStyles();\r\n  const [open, setOpen] = React.useState(false);\r\n  const [hidden, setHidden] = React.useState(false);\r\n\r\n  const handleVisibility = () => {\r\n    setHidden(prevHidden => !prevHidden);\r\n  };\r\n\r\n  const handleOpen = () => {\r\n    setOpen(true);\r\n  };\r\n\r\n  const handleClose = () => {\r\n    setOpen(false);\r\n  };\r\n\r\n  return (\r\n    <div className={classes.root}>\r\n      <Button onClick={handleVisibility}>Toggle Speed Dial</Button>\r\n      <Backdrop open={open} />\r\n      <SpeedDial\r\n        ariaLabel=\"SpeedDial tooltip example\"\r\n        className={classes.speedDial}\r\n        hidden={hidden}\r\n        icon={<SpeedDialIcon />}\r\n        onClose={handleClose}\r\n        onOpen={handleOpen}\r\n        open={open}>\r\n        {actions.map(action => (\r\n          <SpeedDialAction\r\n            key={action.name}\r\n            icon={action.icon}\r\n            tooltipTitle={action.name}\r\n            tooltipOpen\r\n            onClick={handleClose}\r\n          />\r\n        ))}\r\n      </SpeedDial>\r\n    </div>\r\n  );\r\n}\r\n"},3622:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return _}));var t=a(0),r=a.n(t),o=a(1043),i=a(53),l=a(106),c=a(326),m=a(391),s=a(9),p=a(119),u=a(465),d=a(386),f=a(905),h=a(1635),S=a(904),b=a(3482),g=a(3645),v=a(3483),D=a(419),E=a.n(D),y=a(1588),C=a.n(y),O=a(1703),k=a.n(O),x=a(398),I=a.n(x),R=a(1299),F=a.n(R),w=Object(p.a)((function(e){return{root:{transform:"translateZ(0px)",flexGrow:1},exampleWrapper:{position:"relative",marginTop:e.spacing(3),height:380},radioGroup:{margin:e.spacing(1,0)},speedDial:{position:"absolute","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:e.spacing(2),right:e.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:e.spacing(2),left:e.spacing(2)}}}})),j=[{icon:r.a.createElement(E.a,null),name:"Copy"},{icon:r.a.createElement(C.a,null),name:"Save"},{icon:r.a.createElement(k.a,null),name:"Print"},{icon:r.a.createElement(I.a,null),name:"Share"},{icon:r.a.createElement(F.a,null),name:"Like"}];function N(){var e=w(),n=r.a.useState("up"),a=Object(s.a)(n,2),t=a[0],o=a[1],l=r.a.useState(!1),c=Object(s.a)(l,2),m=c[0],p=c[1],D=r.a.useState(!1),E=Object(s.a)(D,2),y=E[0],C=E[1],O=function(){p(!1)};return r.a.createElement(i.a,{className:e.root},r.a.createElement(u.a,{control:r.a.createElement(S.a,{checked:y,onChange:function(e){C(e.target.checked)},color:"primary"}),label:"Hidden"}),r.a.createElement(d.a,{className:e.radioGroup,component:"legend"},"Direction"),r.a.createElement(h.a,{"aria-label":"direction",name:"direction",value:t,onChange:function(e){o(e.target.value)},row:!0},r.a.createElement(u.a,{value:"up",control:r.a.createElement(f.a,null),label:"Up"}),r.a.createElement(u.a,{value:"right",control:r.a.createElement(f.a,null),label:"Right"}),r.a.createElement(u.a,{value:"down",control:r.a.createElement(f.a,null),label:"Down"}),r.a.createElement(u.a,{value:"left",control:r.a.createElement(f.a,null),label:"Left"})),r.a.createElement("div",{className:e.exampleWrapper},r.a.createElement(b.a,{ariaLabel:"SpeedDial example",className:e.speedDial,hidden:y,icon:r.a.createElement(g.a,null),onClose:O,onOpen:function(){p(!0)},open:m,direction:t},j.map((function(e){return r.a.createElement(v.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,onClick:O})})))))}var L=a(375),T=a(1406),B=a.n(T),H=Object(p.a)((function(e){return{root:{height:380,transform:"translateZ(0px)",flexGrow:1},speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}}})),P=[{icon:r.a.createElement(E.a,null),name:"Copy"},{icon:r.a.createElement(C.a,null),name:"Save"},{icon:r.a.createElement(k.a,null),name:"Print"},{icon:r.a.createElement(I.a,null),name:"Share"},{icon:r.a.createElement(F.a,null),name:"Like"}];function G(){var e=H(),n=r.a.useState(!1),a=Object(s.a)(n,2),t=a[0],o=a[1],i=r.a.useState(!1),l=Object(s.a)(i,2),c=l[0],m=l[1],p=function(){o(!1)};return r.a.createElement("div",{className:e.root},r.a.createElement(L.a,{onClick:function(){m((function(e){return!e}))}},"Toggle Speed Dial"),r.a.createElement(b.a,{ariaLabel:"SpeedDial openIcon example",className:e.speedDial,hidden:c,icon:r.a.createElement(g.a,{openIcon:r.a.createElement(B.a,null)}),onClose:p,onOpen:function(){o(!0)},open:t},P.map((function(e){return r.a.createElement(v.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,onClick:p})}))))}var A=a(574),M=Object(p.a)((function(e){return{root:{height:380,transform:"translateZ(0px)",flexGrow:1},speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}}})),U=[{icon:r.a.createElement(E.a,null),name:"Copy"},{icon:r.a.createElement(C.a,null),name:"Save"},{icon:r.a.createElement(k.a,null),name:"Print"},{icon:r.a.createElement(I.a,null),name:"Share"},{icon:r.a.createElement(F.a,null),name:"Like"}];function Z(){var e=M(),n=r.a.useState(!1),a=Object(s.a)(n,2),t=a[0],o=a[1],i=r.a.useState(!1),l=Object(s.a)(i,2),c=l[0],m=l[1],p=function(){o(!1)};return r.a.createElement("div",{className:e.root},r.a.createElement(L.a,{onClick:function(){m((function(e){return!e}))}},"Toggle Speed Dial"),r.a.createElement(A.a,{open:t}),r.a.createElement(b.a,{ariaLabel:"SpeedDial tooltip example",className:e.speedDial,hidden:c,icon:r.a.createElement(g.a,null),onClose:p,onOpen:function(){o(!0)},open:t},U.map((function(e){return r.a.createElement(v.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,tooltipOpen:!0,onClick:p})}))))}var W=Object(c.a)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),V=a(2933),J=[{label:"Simple Speed Dial",link:"simple-speed-dial",component:r.a.createElement(N,null),filename:"./SimpleSpeedDials.txt"},{label:"Custom close icon",link:"custom-close-icon",component:r.a.createElement(G,null),filename:"./OpenIconSpeedDial.txt"},{label:"Persistent action tooltips",link:"persistent-action-tooltips",component:r.a.createElement(Z,null),filename:"./SpeedDialTooltipOpen.txt"}];function _(){var e=W();return r.a.createElement(o.b,{pageTitle:"Speed Dial",menus:J},J.map((function(n,a){return r.a.createElement(i.a,{key:a,id:n.link,className:e.section},r.a.createElement(l.a,{component:"h3",variant:"inherit",className:e.sectionHeading},n.label),r.a.createElement(m.a,{code:V(n.filename).default,language:"jsx"},n.component))})))}}}]);
//# sourceMappingURL=143.5cbc54c9.chunk.js.map