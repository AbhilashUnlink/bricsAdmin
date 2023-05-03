import FormSpy from "@data-driven-forms/react-form-renderer/form-spy";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import Button from "@mui/material/Button";
const FormTemplate = ({ formFields }) => {
  const { handleSubmit, getState } = useFormApi();
  const { submitting, valid } = getState();
  return (
    <form className="detail-form" onSubmit={handleSubmit} noValidate>
      <div className="detail-list">
        <div className="inner-details">
          <div className="risk-statement edit-m-statement-form">
            {formFields}
            <FormSpy subscription={{ pristine: true }}>
              {() => (
                <div className="action-buttons">
                  <Button
                    disabled={submitting || !valid}
                    type="submit"
                    className="submit-button"
                    variant="contained"
                  >
                    Login
                  </Button>
                </div>
              )}
            </FormSpy>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormTemplate;
