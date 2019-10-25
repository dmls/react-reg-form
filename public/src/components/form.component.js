import {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        const form = e.target;
        e.preventDefault();

        axios.post('http://localhost:4000/sweeps/' + this.postTarget, this.state)
            .then(res => {
                const data = res.data;

                const errors = data.errors;
                const elements = form.elements;
                for (var i = 0; i < elements.length; ++i) {
                    let input = elements[i];
                    let label = input.parentNode.getElementsByTagName('label')[0];

                    input.classList.remove('is-invalid');
                    if (label) {
                        label.classList.remove('text-danger');
                    }

                    if (!errors) {
                        continue;
                    }

                    if (!errors.includes(input.name)) {
                        continue;
                    }

                    input.classList.add('is-invalid');
                    if (label) {
                        label.classList.add('text-danger');
                    }
                }

                if (errors) {
                    const input = document.getElementsByName(errors[0])[0];
                    input.scrollIntoView();
                    window.scrollBy(0, -35);
                }

                var navigate = data.navigate;
                if (navigate) {
                    window.location = '/' + navigate;
                }
            });
    }
}