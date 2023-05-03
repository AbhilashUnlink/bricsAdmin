import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';
const LoginSchema = {
    fields:[
      {
        name:'LoginForm',
        component: 'login-form',
        fields: [
          {
            component: componentTypes.TEXT_FIELD,
            name: 'username',
            label: "UserName",
            isRequired: true,
            FormFieldGridProps: { xs: 12 },
            className: 'edit-m-statement-fields read-only-field',
            validate: [
                { type: validatorTypes.REQUIRED },
            ],
          },
          {
            component: componentTypes.TEXT_FIELD,
            name: 'password',
            label: "Password",
            isRequired: true,
            FormFieldGridProps: { xs: 12 },
            className: 'edit-m-statement-fields read-only-field',
            validate: [
                { type: validatorTypes.REQUIRED },
            ],
          },
          {
            component: componentTypes.CHECKBOX,
            name: 'ConfirmCaptureCheckbox',
            label: "Remember Me",
            type:'boolean',
            initializeOnMount: true,
            isRequired: false,
            className: 'confirm_capture_checkbox',
            }
        ]
      }
    ]

  }

export default LoginSchema;