"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["hello_react"],{

/***/ "./app/javascript/packs/hello_react.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/hello_react.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _resource_management_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resource-management/index */ "./app/javascript/resource-management/index.jsx");



const container = document.getElementById('root');
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
document.addEventListener('DOMContentLoaded', () => {
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_resource_management_index__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ }),

/***/ "./app/javascript/resource-management/components/CreateEmployee/index.jsx":
/*!********************************************************************************!*\
  !*** ./app/javascript/resource-management/components/CreateEmployee/index.jsx ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Snackbar/Snackbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");




const myTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])({
  palette: {
    primary: {
      main: 'rgb(103, 79, 192)'
    },
    text: {
      primary: 'rgb(103, 79, 192)'
    }
  }
});
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
  createButtonStyles: {
    height: '40px',
    width: '200px',
    fontWeight: '700 !important',
    fontFamily: 'Avenir Next !important'
  },
  dailogContent: {
    paddingBottom: '15px'
  },
  textFieldStyles: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(103, 79, 192)'
      },
      '&:hover fieldset': {
        borderColor: 'rgb(103, 79, 192)'
      }
    }
  }
});
function CreateEmployee({
  setEmployeeRefetch
}) {
  const classes = useStyles();
  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [employeeName, setEmployeeName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [snackbarOpen, setSnackbarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [snackbarMessage, setSnackbarMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [snackbarSeverity, setSnackbarSeverity] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('success');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEmployeeName('');
  };
  const handleAddEmployee = async () => {
    const data = {
      emp_name: employeeName
    };
    await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/createEmployee', data).then(() => {
      setSnackbarMessage('Employee created successfully');
      setSnackbarOpen(true);
      setEmployeeRefetch(true);
      setSnackbarSeverity('success');
    }).catch(() => {
      setSnackbarMessage('Failed to add employee.');
      setSnackbarOpen(true);
      setSnackbarSeverity('error');
    }).finally(() => {
      handleClose();
    });
  };
  const handleInputChange = event => {
    setEmployeeName(event.target.value);
  };
  const handleSnackbarClose = reason => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    theme: myTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.createButtonStyles,
    onClick: handleClickOpen,
    variant: "contained"
  }, "Create Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Add Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.dailogContent
  }, "Please enter the name of the employee:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.textFieldStyles,
    label: "Employee Name",
    type: "text",
    fullWidth: true,
    value: employeeName,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleAddEmployee,
    variant: "contained"
  }, "Add"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    open: snackbarOpen,
    autoHideDuration: 4000,
    onClose: handleSnackbarClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClose: handleSnackbarClose,
    severity: snackbarSeverity,
    variant: "filled",
    sx: {
      width: '100%'
    }
  }, snackbarMessage)));
}
/* harmony default export */ __webpack_exports__["default"] = (CreateEmployee);

/***/ }),

/***/ "./app/javascript/resource-management/components/FetchEmployee/index.jsx":
/*!*******************************************************************************!*\
  !*** ./app/javascript/resource-management/components/FetchEmployee/index.jsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-react-table */ "./node_modules/material-react-table/dist/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");



const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const columns = [{
  accessorKey: 'id',
  header: 'Id',
  size: 100,
  enableColumnFilter: false,
  enableEditing: false,
  enableSorting: false
}, {
  accessorKey: 'emp_name',
  header: 'Employee Name',
  size: 150,
  enableEditing: false,
  enableColumnFilter: true
}];
monthNames.forEach(month => {
  columns.push({
    header: month,
    footer: 'Total',
    accessorKey: month.toLowerCase(),
    size: 100,
    enableEditing: true,
    enableColumnFilter: true
  });
});
const FetchEmployee = ({
  employeeRefetch,
  setEmployeeRefetech
}) => {
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('api/fetchEmployee').then(response => {
      setData(response.data);
      setEmployeeRefetech(false);
    });
  }, [employeeRefetch]);
  const table = (0,material_react_table__WEBPACK_IMPORTED_MODULE_2__.useMaterialReactTable)({
    columns,
    data,
    enableColumnPinning: true,
    enablePagination: false,
    initialState: {
      columnPinning: {
        left: ['id', 'emp_name']
      }
    },
    enableFullScreenToggle: false,
    enableEditing: true,
    editDisplayMode: 'table',
    //cell
    columnFilterDisplayMode: 'popover'
    // MuiTablePaperProps: { PaperProps: { elevation: 0 } }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(material_react_table__WEBPACK_IMPORTED_MODULE_2__.MaterialReactTable, {
    table: table
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (FetchEmployee);

/***/ }),

/***/ "./app/javascript/resource-management/components/Header/index.jsx":
/*!************************************************************************!*\
  !*** ./app/javascript/resource-management/components/Header/index.jsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _assets_images_softsuaveImage_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/images/softsuaveImage.png */ "./app/assets/images/softsuaveImage.png");




const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
  container: {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(103, 79, 192)',
    zindex: '9'
  },
  resourceManagementHeader: {
    width: '100%',
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr 1fr 1fr'
  },
  innerHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: '30px !important',
    fontWeight: '600 !important',
    color: '#fff'
  },
  line: {
    zIndex: '9',
    height: '5px',
    width: '100%',
    background: 'linear-gradient(90deg, rgb(255, 74, 92) 0%, rgb(255, 137, 97) 50%, rgb(255, 74, 92) 100%)',
    marginTop: '0px'
  }
});
function Header() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.resourceManagementHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.innerHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "img",
    src: _assets_images_softsuaveImage_png__WEBPACK_IMPORTED_MODULE_1__,
    alt: "SoftSuave Logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.innerHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4",
    component: "h5",
    className: classes.heading
  }, "Resource Management")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.innerHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "A")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.line
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./app/javascript/resource-management/components/Year/index.jsx":
/*!**********************************************************************!*\
  !*** ./app/javascript/resource-management/components/Year/index.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/ThemeProvider.js");






const myTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])({
  palette: {
    primary: {
      main: 'rgb(103, 79, 192)'
    }
  },
  typography: {
    fontFamily: 'Avenir Next '
  }
});
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_3__["default"])({
  yearSelector: {
    '& .MuiOutlinedInput-root': {
      width: '200px',
      height: '40px',
      '& fieldset': {
        borderColor: 'rgb(103, 79, 192)'
      },
      '&:hover fieldset': {
        borderColor: 'rgb(103, 79, 192)'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(103, 79, 192)'
      }
    },
    '& svg': {
      color: 'rgb(103, 79, 192)'
    },
    '& label': {
      color: 'rgb(103, 79, 192)'
    },
    '& input': {
      color: 'rgb(103, 79, 192)'
    }
  }
});
function Year() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    theme: myTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_6__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_7__.DatePicker, {
    className: classes.yearSelector,
    views: ['year'],
    label: "Select Year",
    minDate: dayjs__WEBPACK_IMPORTED_MODULE_1___default()('2000-04-17'),
    maxDate: dayjs__WEBPACK_IMPORTED_MODULE_1___default()('2024-04-17'),
    slotProps: {
      textField: {
        size: 'small'
      }
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Year);

/***/ }),

/***/ "./app/javascript/resource-management/index.jsx":
/*!******************************************************!*\
  !*** ./app/javascript/resource-management/index.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/makeStyles/makeStyles.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./app/javascript/resource-management/components/Header/index.jsx");
/* harmony import */ var _components_Year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Year */ "./app/javascript/resource-management/components/Year/index.jsx");
/* harmony import */ var _components_CreateEmployee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CreateEmployee */ "./app/javascript/resource-management/components/CreateEmployee/index.jsx");
/* harmony import */ var _components_FetchEmployee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FetchEmployee */ "./app/javascript/resource-management/components/FetchEmployee/index.jsx");







const myTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"])({
  typography: {
    fontFamily: 'Avenir Next '
  }
});
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_6__["default"])({
  yearAndEmployee: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 10% 10px 10%',
    fontFamily: 'Avenir Next'
  },
  main: {
    display: 'flex',
    flexDirection: 'column'
  }
});
const ResourceManagement = () => {
  const classes = useStyles();
  const [employeeRefetch, setEmployeeRefetch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    theme: myTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.main
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.yearAndEmployee
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Year__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CreateEmployee__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setEmployeeRefetch: setEmployeeRefetch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FetchEmployee__WEBPACK_IMPORTED_MODULE_4__["default"], {
    employeeRefetch: employeeRefetch,
    setEmployeeRefetch: setEmployeeRefetch
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ResourceManagement);

/***/ }),

/***/ "./app/assets/images/softsuaveImage.png":
/*!**********************************************!*\
  !*** ./app/assets/images/softsuaveImage.png ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/app/assets/images/softsuaveImage-cbf34529bcfdc0140dab.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_material_Avatar_Avatar_js-node_modules_mui_material_DialogContentTex-88f90b"], function() { return __webpack_exec__("./app/javascript/packs/hello_react.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=hello_react.js.map