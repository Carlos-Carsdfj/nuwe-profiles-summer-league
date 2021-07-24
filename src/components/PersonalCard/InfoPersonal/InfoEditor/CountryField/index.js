/* eslint-disable react/prop-types */
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeStyles } from '@material-ui/core/styles'
import { Countries } from 'constSetting'

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
})

export default function CountrySelect() {
  const classes = useStyles()
  return (
    <Autocomplete
      id="country"
      style={{ width: 300 }}
      options={Countries}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <>
          <span>{countryToFlag(option.code)}</span>
          {option.label}
        </>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="País Actual"
          variant="outlined"
          id="country-user-input"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
          
          required={true}
        />
      )}
    />
  )
}

