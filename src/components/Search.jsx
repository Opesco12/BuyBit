import { TextField, IconButton, InputAdornment } from "@mui/material";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Search = () => {
  return (
    <TextField
      sx={{
        width: "270px",
      }}
      placeholder="What are you looking for?"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
