
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">FourteenFour</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:FourteenFour_BasecampAuth" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="FourteenFour/BasecampAuth.html">BasecampAuth</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:FourteenFour_BasecampAuth_Facades" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="FourteenFour/BasecampAuth/Facades.html">Facades</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:FourteenFour_BasecampAuth_Facades_BasecampAuth" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="FourteenFour/BasecampAuth/Facades/BasecampAuth.html">BasecampAuth</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:FourteenFour_BasecampAuth_Provider" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="FourteenFour/BasecampAuth/Provider.html">Provider</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:FourteenFour_BasecampAuth_Provider_Basecamp" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="FourteenFour/BasecampAuth/Provider/Basecamp.html">Basecamp</a>                    </div>                </li>                            <li data-name="class:FourteenFour_BasecampAuth_Provider_BasecampResourceOwner" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html">BasecampResourceOwner</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:FourteenFour_BasecampAuth_BasecampAuthServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="FourteenFour/BasecampAuth/BasecampAuthServiceProvider.html">BasecampAuthServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "FourteenFour.html", "name": "FourteenFour", "doc": "Namespace FourteenFour"},{"type": "Namespace", "link": "FourteenFour/BasecampAuth.html", "name": "FourteenFour\\BasecampAuth", "doc": "Namespace FourteenFour\\BasecampAuth"},{"type": "Namespace", "link": "FourteenFour/BasecampAuth/Facades.html", "name": "FourteenFour\\BasecampAuth\\Facades", "doc": "Namespace FourteenFour\\BasecampAuth\\Facades"},{"type": "Namespace", "link": "FourteenFour/BasecampAuth/Provider.html", "name": "FourteenFour\\BasecampAuth\\Provider", "doc": "Namespace FourteenFour\\BasecampAuth\\Provider"},
            
            {"type": "Class", "fromName": "FourteenFour\\BasecampAuth", "fromLink": "FourteenFour/BasecampAuth.html", "link": "FourteenFour/BasecampAuth/BasecampAuthServiceProvider.html", "name": "FourteenFour\\BasecampAuth\\BasecampAuthServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\BasecampAuthServiceProvider", "fromLink": "FourteenFour/BasecampAuth/BasecampAuthServiceProvider.html", "link": "FourteenFour/BasecampAuth/BasecampAuthServiceProvider.html#method_register", "name": "FourteenFour\\BasecampAuth\\BasecampAuthServiceProvider::register", "doc": "&quot;Register bindings in the container.&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\BasecampAuthServiceProvider", "fromLink": "FourteenFour/BasecampAuth/BasecampAuthServiceProvider.html", "link": "FourteenFour/BasecampAuth/BasecampAuthServiceProvider.html#method_boot", "name": "FourteenFour\\BasecampAuth\\BasecampAuthServiceProvider::boot", "doc": "&quot;Perform post-registration booting of services.&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\BasecampAuthServiceProvider", "fromLink": "FourteenFour/BasecampAuth/BasecampAuthServiceProvider.html", "link": "FourteenFour/BasecampAuth/BasecampAuthServiceProvider.html#method_provides", "name": "FourteenFour\\BasecampAuth\\BasecampAuthServiceProvider::provides", "doc": "&quot;Define defered binds so laravel can return to it.&quot;"},
            
            {"type": "Class", "fromName": "FourteenFour\\BasecampAuth\\Facades", "fromLink": "FourteenFour/BasecampAuth/Facades.html", "link": "FourteenFour/BasecampAuth/Facades/BasecampAuth.html", "name": "FourteenFour\\BasecampAuth\\Facades\\BasecampAuth", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Facades\\BasecampAuth", "fromLink": "FourteenFour/BasecampAuth/Facades/BasecampAuth.html", "link": "FourteenFour/BasecampAuth/Facades/BasecampAuth.html#method_getFacadeAccessor", "name": "FourteenFour\\BasecampAuth\\Facades\\BasecampAuth::getFacadeAccessor", "doc": "&quot;Get the registered name of the component.&quot;"},
            
            {"type": "Class", "fromName": "FourteenFour\\BasecampAuth\\Provider", "fromLink": "FourteenFour/BasecampAuth/Provider.html", "link": "FourteenFour/BasecampAuth/Provider/Basecamp.html", "name": "FourteenFour\\BasecampAuth\\Provider\\Basecamp", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\Basecamp", "fromLink": "FourteenFour/BasecampAuth/Provider/Basecamp.html", "link": "FourteenFour/BasecampAuth/Provider/Basecamp.html#method_getBaseAuthorizationUrl", "name": "FourteenFour\\BasecampAuth\\Provider\\Basecamp::getBaseAuthorizationUrl", "doc": "&quot;Returns the Authorization URL used for&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\Basecamp", "fromLink": "FourteenFour/BasecampAuth/Provider/Basecamp.html", "link": "FourteenFour/BasecampAuth/Provider/Basecamp.html#method_getAuthorizationParameters", "name": "FourteenFour\\BasecampAuth\\Provider\\Basecamp::getAuthorizationParameters", "doc": "&quot;Returns authorization parameters based on provided options.&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\Basecamp", "fromLink": "FourteenFour/BasecampAuth/Provider/Basecamp.html", "link": "FourteenFour/BasecampAuth/Provider/Basecamp.html#method_getBaseAccessTokenUrl", "name": "FourteenFour\\BasecampAuth\\Provider\\Basecamp::getBaseAccessTokenUrl", "doc": "&quot;Returns the base URL for requesting an access token.&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\Basecamp", "fromLink": "FourteenFour/BasecampAuth/Provider/Basecamp.html", "link": "FourteenFour/BasecampAuth/Provider/Basecamp.html#method_getAccessToken", "name": "FourteenFour\\BasecampAuth\\Provider\\Basecamp::getAccessToken", "doc": "&quot;Requests an access token using a specified grant and option set.&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\Basecamp", "fromLink": "FourteenFour/BasecampAuth/Provider/Basecamp.html", "link": "FourteenFour/BasecampAuth/Provider/Basecamp.html#method_getResourceOwnerDetailsUrl", "name": "FourteenFour\\BasecampAuth\\Provider\\Basecamp::getResourceOwnerDetailsUrl", "doc": "&quot;Requests resource owner details.&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\Basecamp", "fromLink": "FourteenFour/BasecampAuth/Provider/Basecamp.html", "link": "FourteenFour/BasecampAuth/Provider/Basecamp.html#method_getDefaultScopes", "name": "FourteenFour\\BasecampAuth\\Provider\\Basecamp::getDefaultScopes", "doc": "&quot;Return default scope for requests&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\Basecamp", "fromLink": "FourteenFour/BasecampAuth/Provider/Basecamp.html", "link": "FourteenFour/BasecampAuth/Provider/Basecamp.html#method_checkResponse", "name": "FourteenFour\\BasecampAuth\\Provider\\Basecamp::checkResponse", "doc": "&quot;Checks a provider response for errors.&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\Basecamp", "fromLink": "FourteenFour/BasecampAuth/Provider/Basecamp.html", "link": "FourteenFour/BasecampAuth/Provider/Basecamp.html#method_createResourceOwner", "name": "FourteenFour\\BasecampAuth\\Provider\\Basecamp::createResourceOwner", "doc": "&quot;Generates a resource owner object from a successful resource owner\ndetails request.&quot;"},
            
            {"type": "Class", "fromName": "FourteenFour\\BasecampAuth\\Provider", "fromLink": "FourteenFour/BasecampAuth/Provider.html", "link": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html", "name": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner", "fromLink": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html", "link": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html#method___construct", "name": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner::__construct", "doc": "&quot;Create new Resource Owner&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner", "fromLink": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html", "link": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html#method_getExpiration", "name": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner::getExpiration", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner", "fromLink": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html", "link": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html#method_getId", "name": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner::getId", "doc": "&quot;Returns the Resource Owner&#039;s ID&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner", "fromLink": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html", "link": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html#method_getEmail", "name": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner::getEmail", "doc": "&quot;Returns the Resource Owner&#039;s Email&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner", "fromLink": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html", "link": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html#method_getFirstName", "name": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner::getFirstName", "doc": "&quot;Returns the Resource Owner&#039;s First Name&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner", "fromLink": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html", "link": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html#method_getLastName", "name": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner::getLastName", "doc": "&quot;Returns the Resource Owner&#039;s Last Name&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner", "fromLink": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html", "link": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html#method_getAccounts", "name": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner::getAccounts", "doc": "&quot;Returns the Resource Owner&#039;s Accounts&quot;"},
                    {"type": "Method", "fromName": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner", "fromLink": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html", "link": "FourteenFour/BasecampAuth/Provider/BasecampResourceOwner.html#method_toArray", "name": "FourteenFour\\BasecampAuth\\Provider\\BasecampResourceOwner::toArray", "doc": "&quot;Array of the response from the Resource Owner&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


