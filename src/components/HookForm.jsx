import React, { useState } from "react";

const HookForm = () => {
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
});

const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() !== "") {
    validateInput(name, value);
    } else {
    setErrors({ ...errors, [name]: "" });
    }
};

const validateInput = (name, value) => {
    switch (name) {
    case "firstName":
        setErrors({...errors, firstName: value.length < 2 ? "First Name must be at least 2 characters" : "",
        });
        break; case "lastName":
        setErrors({...errors, lastName: value.length < 2 ? "Last Name must be at least 2 characters" : "",
        });
        break;
    case "email":
        setErrors({...errors, email: value.length < 5 ? "Email must be at least 5 characters" : "",
        });
        break;
    case "password":
        setErrors({...errors, password: value.length < 8 ? "Password must be at least 8 characters" : "",
        });
        break;
    case "confirmPassword":
        setErrors({...errors, confirmPassword: value !== formData.password ? "Passwords must match" : "",
        });
        break;
        default:
        break;
    }
};

return (
    <div>
        <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}/>
        {errors.firstName && <p>{errors.firstName}</p>}
        </label>

        <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
        {errors.lastName && <p>{errors.lastName}</p>}
        </label>

        <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange}/>
        {errors.email && <p>{errors.email}</p>}
        </label>

        <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange}/>
        {errors.password && <p>{errors.password}</p>}
        </label>

        <label>
        Confirm Password:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange}/>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </label>
    </div>
);
};

export default HookForm;
