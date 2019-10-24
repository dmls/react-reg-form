class Validator {
    getErrors(data) {
        var errors = [];
        for (var key in data) {
            const field = data[key];
            const type = field.type;
            const value = field.value;
            const optional = field.optional;
            
            if (!value && !optional) {
                errors.push(key);
                continue;
            }

            if (type == 'text') {
            }

            if (type == 'email') {
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
                    errors.push(key);
                    continue;
                }
            }

            if (type == 'email_confirm') {
                const email = data.email.value;
                if (value != email) {
                    errors.push(key);
                    continue;
                }
            }
        }

        return errors != false ? errors : false;
    }
}

module.exports = Validator;