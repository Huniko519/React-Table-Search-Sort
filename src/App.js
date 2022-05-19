import "./styles.css";
// import Add from "@mui/icons-material/Add";
// import CallMade from "@mui/icons-material/CallMade";
// import CallReceived from "@mui/icons-material/CallReceived";
import Done from "@mui/icons-material/Done";
import MoreVert from "@mui/icons-material/MoreVert";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";

import {
  Box,
  // Button,
  Chip,
  // Divider,
  Grid,
  IconButton,
  // Menu,
  // MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  // Typography
} from "@mui/material";

import StatusIcon from "./StatusIcon";

import { useTable, useSortBy, useGlobalFilter, useAsyncDebounce } from "react-table";

const datas = {
  sites: [
    {
      __typename: "Site",
      id: "505",
      siteId: "0",
      name: "Test Site",
      address: "1340 Environ Way",
      city: "Chapel Hill",
      phone: null,
      IRB: null,
      principalInvestigator: {
        __typename: "PrincipalInvestigator",
        name: "",
        email: "",
        phone: ""
      },
      studyCoordinator: {
        __typename: "StudyCoordinator",
        name: "",
        email: "",
        phone: ""
      },
      proxyNumber: {
        __typename: "Number",
        id: "2",
        countryCode: "us",
        value: "+19193671276",
        country: {
          __typename: "Country",
          code: "us",
          englishName: "United States of America",
          flagIconUrl: "https://public.trialbee.com/flags/us.svg"
        }
      },
      inboundProxyNumber: {
        __typename: "Number",
        id: "7",
        countryCode: "us",
        value: "+18577635348",
        country: {
          __typename: "Country",
          code: "us",
          englishName: "United States of America",
          flagIconUrl: "https://public.trialbee.com/flags/us.svg"
        }
      },
      listUsers: {
        __typename: "UserConnection",
        totalCount: 25
      },
      status: "INACTIVE",
      default: false,
      coordinates: {
        __typename: "Coordinates",
        latitude: 55.6015447,
        longitude: 13.0004194
      },
      zipCode: "27517",
      state: "North Carolina",
      countryCode: "us",
      timezone: "US/Eastern",
      country: {
        __typename: "Country",
        code: "us",
        englishName: "United States of America",
        flagIconUrl: "https://public.trialbee.com/flags/us.svg"
      },
      languages: [
        {
          __typename: "Lang",
          locale: "en_US",
          name: "English"
        }
      ],
      createdAt: "2021-10-28T09:23:44.475Z",
      updatedAt: "2021-11-10T15:54:19.659Z"
    },
    {
      __typename: "Site",
      id: "515",
      siteId: "00",
      name: "Test Site 2",
      address: "Södra Tullgatan 3",
      city: "Malmö",
      phone: null,
      IRB: null,
      principalInvestigator: {
        __typename: "PrincipalInvestigator",
        name: "",
        email: "",
        phone: ""
      },
      studyCoordinator: {
        __typename: "StudyCoordinator",
        name: "",
        email: "",
        phone: ""
      },
      proxyNumber: null,
      inboundProxyNumber: null,
      listUsers: {
        __typename: "UserConnection",
        totalCount: 25
      },
      status: "INACTIVE",
      default: false,
      coordinates: {
        __typename: "Coordinates",
        latitude: 55.6015447,
        longitude: 13.0004194
      },
      zipCode: "211 40",
      state: "Skåne län",
      countryCode: "se",
      timezone: "Europe/Stockholm",
      country: {
        __typename: "Country",
        code: "se",
        englishName: "Sweden",
        flagIconUrl: "https://public.trialbee.com/flags/se.svg"
      },
      languages: [
        {
          __typename: "Lang",
          locale: "es_US",
          name: "Spanish"
        }
      ],
      createdAt: "2021-11-05T12:04:03.971Z",
      updatedAt: "2021-11-10T15:54:15.225Z"
    },
    {
      __typename: "Site",
      id: "516",
      siteId: "100106",
      name: "Neurology Associates of Ormond Beach",
      address: "Mirror Lake Drive 8",
      city: "Ormond Beach",
      phone: null,
      IRB: null,
      principalInvestigator: {
        __typename: "PrincipalInvestigator",
        name: "James Scott",
        email: "neurojscott@yahoo.com",
        phone: ""
      },
      studyCoordinator: {
        __typename: "StudyCoordinator",
        name: "Deborah Hrusa",
        email: "dhrusa@naobresearch.com",
        phone: ""
      },
      proxyNumber: {
        __typename: "Number",
        id: "2",
        countryCode: "us",
        value: "+19193671276",
        country: {
          __typename: "Country",
          code: "us",
          englishName: "United States of America",
          flagIconUrl: "https://public.trialbee.com/flags/us.svg"
        }
      },
      inboundProxyNumber: {
        __typename: "Number",
        id: "7",
        countryCode: "us",
        value: "+18577635348",
        country: {
          __typename: "Country",
          code: "us",
          englishName: "United States of America",
          flagIconUrl: "https://public.trialbee.com/flags/us.svg"
        }
      },
      listUsers: {
        __typename: "UserConnection",
        totalCount: 27
      },
      status: "ACTIVE",
      default: true,
      coordinates: {
        __typename: "Coordinates",
        latitude: 29.2658197,
        longitude: -81.1027629
      },
      zipCode: "32174",
      state: "Florida",
      countryCode: "us",
      timezone: "America/New_York",
      country: {
        __typename: "Country",
        code: "us",
        englishName: "United States of America",
        flagIconUrl: "https://public.trialbee.com/flags/us.svg"
      },
      languages: [
        {
          __typename: "Lang",
          locale: "en_US",
          name: "English"
        }
      ],
      createdAt: "2021-11-12T08:36:51.749Z",
      updatedAt: "2022-01-17T13:51:03.455Z"
    },
    {
      __typename: "Site",
      id: "552",
      siteId: "200101",
      name: "Healthcare Innovations Institute, LLC",
      address: "North University Drive 5441",
      city: "Coral Springs",
      phone: "19545305844",
      IRB: null,
      principalInvestigator: {
        __typename: "PrincipalInvestigator",
        name: "Dr Kalirao",
        email: "soniakalirao@cctdoctors.com",
        phone: ""
      },
      studyCoordinator: {
        __typename: "StudyCoordinator",
        name: " Maria Anaya",
        email: "manaya@NeuroFL.com",
        phone: ""
      },
      proxyNumber: {
        __typename: "Number",
        id: "2",
        countryCode: "us",
        value: "+19193671276",
        country: {
          __typename: "Country",
          code: "us",
          englishName: "United States of America",
          flagIconUrl: "https://public.trialbee.com/flags/us.svg"
        }
      },
      inboundProxyNumber: {
        __typename: "Number",
        id: "7",
        countryCode: "us",
        value: "+18577635348",
        country: {
          __typename: "Country",
          code: "us",
          englishName: "United States of America",
          flagIconUrl: "https://public.trialbee.com/flags/us.svg"
        }
      },
      listUsers: {
        __typename: "UserConnection",
        totalCount: 26
      },
      status: "DRAFT",
      default: false,
      coordinates: {
        __typename: "Coordinates",
        latitude: 26.2974993,
        longitude: -80.2474222
      },
      zipCode: "33067",
      state: "Florida",
      countryCode: "us",
      timezone: "America/New_York",
      country: {
        __typename: "Country",
        code: "us",
        englishName: "United States of America",
        flagIconUrl: "https://public.trialbee.com/flags/us.svg"
      },
      languages: [
        {
          __typename: "Lang",
          locale: "en_US",
          name: "English"
        }
      ],
      createdAt: "2022-01-12T13:32:20.977Z",
      updatedAt: "2022-01-12T13:32:20.986Z"
    },
    {
      __typename: "Site",
      id: "551",
      siteId: "200102",
      name: "Premier Clinical Research Institute",
      address: "Northwest 72nd Avenue 3100",
      city: "Miami",
      phone: "13053920279",
      IRB: null,
      principalInvestigator: {
        __typename: "PrincipalInvestigator",
        name: "Dr Rielo",
        email: "drielo@pcrinstitute.com",
        phone: ""
      },
      studyCoordinator: {
        __typename: "StudyCoordinator",
        name: "Raymond Rodriguez",
        email: "rrodriguez@pcrinstitute.com",
        phone: ""
      },
      proxyNumber: {
        __typename: "Number",
        id: "2",
        countryCode: "us",
        value: "+19193671276",
        country: {
          __typename: "Country",
          code: "us",
          englishName: "United States of America",
          flagIconUrl: "https://public.trialbee.com/flags/us.svg"
        }
      },
      inboundProxyNumber: {
        __typename: "Number",
        id: "7",
        countryCode: "us",
        value: "+18577635348",
        country: {
          __typename: "Country",
          code: "us",
          englishName: "United States of America",
          flagIconUrl: "https://public.trialbee.com/flags/us.svg"
        }
      },
      listUsers: {
        __typename: "UserConnection",
        totalCount: 25
      },
      status: "DRAFT",
      default: false,
      coordinates: {
        __typename: "Coordinates",
        latitude: 25.8030727,
        longitude: -80.3141637
      },
      zipCode: "33122",
      state: "Florida",
      countryCode: "us",
      timezone: "America/New_York",
      country: {
        __typename: "Country",
        code: "us",
        englishName: "United States of America",
        flagIconUrl: "https://public.trialbee.com/flags/us.svg"
      },
      languages: [
        {
          __typename: "Lang",
          locale: "en_US",
          name: "English"
        }
      ],
      createdAt: "2021-12-27T10:21:43.901Z",
      updatedAt: "2022-01-12T13:33:32.169Z"
    }
  ],
  proxyNumbers: [
    {
      __typename: "Number",
      id: "23",
      countryCode: "se",
      value: "+46105517569",
      country: {
        __typename: "Country",
        code: "se",
        englishName: "Sweden",
        flagIconUrl: "https://public.trialbee.com/flags/se.svg"
      }
    }
  ],
  inboundProxyNumbers: [
    {
      __typename: "Number",
      id: "24",
      countryCode: "se",
      value: "+46858097614",
      country: {
        __typename: "Country",
        code: "se",
        englishName: "Sweden",
        flagIconUrl: "https://public.trialbee.com/flags/se.svg"
      }
    }
  ],
  locales: {
    __typename: "LocaleConnection",
    nodes: [
      {
        __typename: "Locale",
        id: "276",
        locale: "en_US",
        country: {
          __typename: "Country",
          code: "us",
          englishName: "United States of America",
          flagIconUrl: "https://public.trialbee.com/flags/us.svg"
        },
        language: {
          __typename: "Language",
          id: "375",
          alpha2code: "en",
          name: "English",
          nativeName: "English"
        }
      },
      {
        __typename: "Locale",
        id: "277",
        locale: "es_US",
        country: {
          __typename: "Country",
          code: "us",
          englishName: "United States of America",
          flagIconUrl: "https://public.trialbee.com/flags/us.svg"
        },
        language: {
          __typename: "Language",
          id: "380",
          alpha2code: "es",
          name: "Spanish",
          nativeName: "Español"
        }
      },
      {
        __typename: "Locale",
        id: "297",
        locale: "uk_UA",
        country: {
          __typename: "Country",
          code: "ua",
          englishName: "Ukraine",
          flagIconUrl: "https://public.trialbee.com/flags/ua.svg"
        },
        language: {
          __typename: "Language",
          id: "476",
          alpha2code: "uk",
          name: "Ukrainian",
          nativeName: "Українська"
        }
      },
      {
        __typename: "Locale",
        id: "298",
        locale: "ru_UA",
        country: {
          __typename: "Country",
          code: "ua",
          englishName: "Ukraine",
          flagIconUrl: "https://public.trialbee.com/flags/ua.svg"
        },
        language: {
          __typename: "Language",
          id: "379",
          alpha2code: "ru",
          name: "Russian",
          nativeName: "Русский"
        }
      },
      {
        __typename: "Locale",
        id: "308",
        locale: "bg_BG",
        country: {
          __typename: "Country",
          code: "bg",
          englishName: "Bulgaria",
          flagIconUrl: "https://public.trialbee.com/flags/bg.svg"
        },
        language: {
          __typename: "Language",
          id: "401",
          alpha2code: "bg",
          name: "Bulgarian",
          nativeName: "български език"
        }
      }
    ]
  }
};

function Flag({ item }) {
  return item ? (
    <img
      height={12}
      src={item.flagIconUrl}
      alt={item.englishName}
    />
  ) : null;
}

function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter, }) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <div 
      style={{
        float: 'right',
      }}
    >
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '1px solid black',
          padding: '5px 10px 5px 10px',
        }}
      />
    </div>
  )
}

export default function App() {
  
  const data = React.useMemo(
    () => datas?.sites.map((row)=>{
      return {
        siteid: row.siteId, 
        name: row.name, 
        address: row.country, 
        addresstxt: row.country.englishName,
        phone: row.phone, 
        proxynumber: '0000', 
        locales: row.languages, 
        irbec: row.IRB, 
        pi: 'N/A', 
        sc: 'N/A', 
        default: row.default, 
        status: row.status, 
        setting: ''
      }
    }),[]
  );

  const columns = React.useMemo(
    () => [{
        Header: 'Site Id',
        accessor: 'siteid',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Address',
        accessor: 'address',
        disableSortBy: true
      },
      {
        Header: '',
        accessor: 'addresstxt',
        disableSortBy: true
      },
      {
        Header: 'Phone',
        accessor: 'phone', 
        disableSortBy: true,
        disableGlobalFilter: true
      },
      {
        Header: 'Proxy number',
        accessor: 'proxynumber',
        disableSortBy: true,
        disableGlobalFilter: true
      },
      {
        Header: 'Locales',
        accessor: 'locales',
        disableGlobalFilter: true
      },
      {
        Header: 'IRB / EC',
        accessor: 'irbec', 
        disableSortBy: true,
        disableGlobalFilter: true
      },
      {
        Header: 'PI',
        accessor: 'pi',
        disableSortBy: true
      },
      {
        Header: 'SC',
        accessor: 'sc',
        disableSortBy: true,
        disableGlobalFilter: true
      },
      {
        Header: 'Default',
        accessor: 'default',
        disableSortBy: true,
        disableGlobalFilter: true
      },
      {
        Header: 'Status',
        accessor: 'status',
        disableGlobalFilter: true
      },
      {
        Header: '',
        accessor: 'setting',
        disableSortBy: true,
        disableGlobalFilter: true
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy)

  return (
    <>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Table sx={{ minWidth: 650, mt: 2 }} size="small" {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▲'
                        : ' ▼'
                      : ''}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, id) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()} key={id}>
                {row.cells.map((cell, idx) => {
                  return (
                    <TableCell key={idx}>
                      {cell.column.id === "siteid" && (
                        cell.render('Cell')
                      )}
                      {cell.column.id === "name" && (
                        cell.render('Cell')
                      )}
                      {cell.column.id === "address" && (
                        <Chip label={<Flag item={cell.value} />} />
                      )}
                      {cell.column.id === "phone" && (
                          <Chip
                            label={
                              <Box pt={0.5} color="common.black">
                                <PhoneIcon color="inherit" />
                              </Box>
                            }
                          />
                      )}
                      {cell.column.id === "proxynumber" && (
                          <Grid container spacing={1}>
                            <Grid item>0000</Grid>
                            <Grid item>0000</Grid>
                          </Grid>
                      )}
                      {cell.column.id === "locales" && (
                          <Grid container spacing={1}>
                            <Grid item>{cell.value[0].locale}</Grid>
                          </Grid>
                      )}
                      {cell.column.id === "irbec" && (
                          ""
                      )}
                      {cell.column.id === "pi" && (
                          "N/A"
                      )}
                      {cell.column.id === "sc" && (
                          "N/A"
                      )}
                      {cell.column.id === "default" && (
                          <Grid item>{cell.value && <Done />}</Grid>
                      )}
                      {cell.column.id === "status" && (
                          <StatusIcon status={cell.value} />
                      )}
                      {cell.column.id === "setting" && (
                          <IconButton
                            aria-label="context menu"
                            // onClick={(event) => handleMenuOpen({ event, site })}
                            size="large"
                          >
                            <MoreVert />
                          </IconButton>
                      )}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
 