define(function() {

    var allProviders = [
        {
            system: "WebPMSpro/ColibriPMS",
            company: "TDS network International",
            type: "CRS",
            language: "en",
            country: "US",
            score: 90
        },
        {
            system: "InnLink CRS",
            company: "Sirvoy",
            type: "PMS",
            language: "au",
            country: "AU",
            score: 50
        },
        {
            system: "Sirvoy Reservation System",
            company: "Sabre Hospitality Solutions",
            type: "CM",
            language: "de",
            country: "DE",
            score: 80
        },
        {
            system: "WebPMSpro/ColibriPMS",
            company: "TDS network International",
            type: "CRS",
            language: "en",
            country: "US",
            score: 90
        },
        {
            system: "InnLink CRS",
            company: "Sirvoy",
            type: "PMS",
            language: "au",
            country: "AU",
            score: 50
        },
        {
            system: "Sirvoy Reservation System",
            company: "Sabre Hospitality Solutions",
            type: "CM",
            language: "de",
            country: "DE",
            score: 80
        },
        {
            system: "WebPMSpro/ColibriPMS",
            company: "TDS network International",
            type: "CRS",
            language: "en",
            country: "US",
            score: 90
        },
        {
            system: "InnLink CRS",
            company: "Sirvoy",
            type: "PMS",
            language: "au",
            country: "AU",
            score: 50
        },
        {
            system: "Sirvoy Reservation System",
            company: "Sabre Hospitality Solutions",
            type: "CM",
            language: "de",
            country: "DE",
            score: 80
        },
        {
            system: "WebPMSpro/ColibriPMS",
            company: "TDS network International",
            type: "CRS",
            language: "en",
            country: "US",
            score: 90
        },
        {
            system: "InnLink CRS",
            company: "Sirvoy",
            type: "PMS",
            language: "au",
            country: "AU",
            score: 50
        },
        {
            system: "Sirvoy Reservation System",
            company: "Sabre Hospitality Solutions",
            type: "CM",
            language: "de",
            country: "DE",
            score: 80
        },
        {
            system: "WebPMSpro/ColibriPMS",
            company: "TDS network International",
            type: "CRS",
            language: "en",
            country: "US",
            score: 90
        },
        {
            system: "InnLink CRS",
            company: "Sirvoy",
            type: "PMS",
            language: "au",
            country: "AU",
            score: 50
        },
        {
            system: "Sirvoy Reservation System",
            company: "Sabre Hospitality Solutions",
            type: "CM",
            language: "de",
            country: "DE",
            score: 80
        }
    ];

    var details = new Vue({
        el: '#system-details',
        data: {
            system: '',
            company: '',
            type: '',
            availableFeatures: [
                "Rates and Availability",
                "Photos",
                "Reservation Notifications",
                "Competitor Rates and Availability",
                "Reservation Confirmations",
                "Hotwire Rates and Availability",
                "Edit Room Types and Rate Plans",
                "Value Add Promotions",
                "Promotions",
                "Displays All Point of Sale Brands",
                "Property Details",
                "Displays Expedia VIP guests"
            ],
            availableRestrictions: [
                "Minimum Length of Stay",
                "Stop Sells as the Room Level",
                "Maximum Length of Stay",
                "Close Outs at the Rate Plan Level",
                "Closed to Arrival",
                "Full Pattern Length of Stays: Arrival",
                "Closed to Departure",
                "Full Pattern Length of Stays: Stay-Through",
                "Advanced Purchase / Minimum Booking Window / Cutoff at the Rate Plan Level"
            ]
        },
        computed: {
            numFeaturesSupported: function() {
                var n = 0;
                for (var i in this.availableFeatures) {
                    if (this.featureSupported(this.availableFeatures[i])) {
                        n++;
                    }
                }
                return n;
            },
            numRestrictionsSupported: function() {
                var n = 0;
                for (var i in this.availableRestrictions) {
                    if (this.restrictionSupported(this.availableRestrictions[i])) {
                        n++;
                    }
                }
                return n;
            }
        },
        methods: {
            open: function(p) {
                this.system = p['system'];
                this.company = p['company'];
                this.type = p['type']
                $(this.$el).foundation('open');
                Foundation.reInit('equalizer');
            },
            featureSupported: function(f) {
                return f ? (this.system.length + f.length) % 2 : false;
            },
            restrictionSupported: function(r) {
                return r ? (this.company.length + r.length) % 2 : false;
            }
        },
        mounted: function() {
            $(this.$el).foundation();
        }
    });
    var app = new Vue({
        el: '#systems-list',
        data: {
            country: '',
            language: '',
            typeCM: false,
            typePMS: false,
            typeCRS: false,
            liveSupport: false,
            productUpdate: false,
            sortedBy: 'score',
            providers: [],
        },
        methods: {
            filteredByType: function(p) {
                if (this.typeCM || this.typePMS || this.typeCRS) {
                    return !((this.typeCM && p.type == 'CM') || (this.typePMS && p.type == 'PMS') || (this.typeCRS && p.type == 'CRS'));
                }
                return false;
            },
            sortBySystem: function(a, b) {
                var x = a['system'].toLowerCase();
                var y = b['system'].toLowerCase();
                return (x < y) ? -1 : (x > y) ? 1 : 0;
            },
            sortByCompany: function(a, b) {
                var x = a['company'].toLowerCase();
                var y = b['company'].toLowerCase();
                return (x < y) ? -1 : (x > y) ? 1 : 0;
            },
            sortByScore: function(a, b) {
                var x = parseFloat(a['score']);
                var y = parseFloat(b['score']);
                return y - x; // desc
            },
            setProviders: function(p) {
                this.providers = p;
                this.sort(this.providers, this.sortedBy);
            },
            sort: function(p, field) {
                switch (field) {
                    case 'system':
                        p.sort(this.sortBySystem);
                        break;
                    case 'company':
                        p.sort(this.sortByCompany);
                        break;
                    case 'score':
                        p.sort(this.sortByScore);
                        break;
                }
            },
            show: function(p) {
                details.open(p);
            },
            onResize: function() {
                var main = $('#systems-list .filter');
                var side = $('#off-canvas .filter');

                if (main.is(":visible")) {
                    $('#off-canvas').foundation('close');
                    if (main.children().length == 0) {
                        side.children().detach().appendTo(main);
                    }
                } else {
                    if (side.children().length == 0) {
                        main.children().detach().appendTo(side);
                    }
                }
            },
            onScroll: function() {
                // Can be in off-canvas
                var fill = $('.systems .filter .fill');
                var h = fill.height();
                var d = 0;
                if (fill.parents('#off-canvas').length == 0) {
                    var ref = $(this.$el).find('.list');
                    d = ref.height() - (fill.parent().height() - h);
                    if (d < 1) {
                        d = 0;
                    }
                }
                if (Math.abs(d - h) > 1) {
                    fill.height(d);
                }
            }
        },
        computed: {
            filteredProviders: function() {
                var results = [];
                for (i in this.providers) {
                    var p = this.providers[i];
                    if (this.filteredByType(p)) {
                        continue;
                    }
                    results.push(p);
                }
                return results;
            }
        },
        watch: {
            sortedBy: function(val) {
                this.sort(this.providers, val);
            }
        },
        mounted: function() {
            $(this.$el).foundation();
            this.onResize();
            this.onScroll();
        }
    });
    app.setProviders(allProviders);
    $(window).resize(function() {
        clearTimeout(app.resizeTimer);
        app.resizeTimer = setTimeout(function() { app.onResize(); }, 100);
    });
    $(window).scroll(function() {
        clearTimeout(app.scrollTimer);
        app.scrollTimer = setTimeout(function() { app.onScroll(); }, 100);
    });

    return {
        init: function () {}
    }

});
