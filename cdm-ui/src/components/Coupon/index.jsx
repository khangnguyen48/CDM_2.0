import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import React from "react";

function Coupon({ data }) {
  const [snackbar, setSnackbar] = React.useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);

  return (
    <div className="flex my-4 w-full max-w-xl max-h-[100vh]">
      <div className="w-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-10 px-8 rounded-lg shadow-md relative">
        <h3 className="text-sm lg:text-base xl:text-2xl font-semibold mb-4">
          {data.description}
        </h3>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span
            id="cpnCode"
            className="text-sm lg:text-base xl:text-2xl border-dashed border text-white px-4 py-2 rounded-l"
          >
            {data.code}
          </span>
          <span
            onClick={() => {
              navigator.clipboard.writeText(data.code);
              setSnackbar({
                children: "Copied to clipboard",
                severity: "success",
              });
            }}
            id="cpnBtn"
            className="border border-white bg-white text-purple-600 hover:bg-gray-300 px-4 py-2.5 rounded-r cursor-pointer"
          >
            Copy Code
          </span>
        </div>
        <p className="text-sm">Expiration Date: {data.exdate}</p>

        <div className="dark:bg-slate-800 w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
        <div className="dark:bg-slate-800 w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
      </div>
      {!!snackbar && (
        <Snackbar
          open
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </div>
  );
}

export default Coupon;
