-[ ] Node Express API.

Endpoints :-

    - GET :-
        /api/members - for all members.
        /api/members/{id} - for a specific member id.

    - POST
        /api/members/add
            {
                "name": "member name",
                "dep":"focus"

            }

    -PUT
        /api/members/{id} - for a specific member id.
        {
            "name":"new name",
            "dep":"new department"
        }

    -DELETE
        /api/members/{id} - to delete a specific member from the database.

contribution sets :- - [ ] all routes are defined inside the /api/routes.js file. - [ ] all the database related models are defined inside the /api/database.js file.
