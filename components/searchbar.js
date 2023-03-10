//import react from 'react';


export default function Searchbarcomp(){

    return(
    <div>
        <div classname="field has-addons">
            <p classname="control">
                <button class="button is-static is-medium"> Search</button>
            </p>
            <p classname="control">
                <input class="input is-medium" type="text" placeholder="Churches"/>
            </p>
            <p classname="control">
                <button class="button is-static is-medium">
                NEAR
                </button>
            </p>
            <p classname="control">
                <input class="input is-medium" type="text" placeholder="Where"/>
            </p>
        </div>
    </div>
    );
}  