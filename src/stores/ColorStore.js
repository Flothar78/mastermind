import { defineStore } from "pinia";
export const useColorStore = defineStore( "ColorStore", {
    state: () =>
    {
        return {
            rows: [
                [ "", "", "", "" ],
                [ "", "", "", "" ],
                [ "", "", "", "" ],
                [ "", "", "", "" ],
                [ "", "", "", "" ],
                [ "", "", "", "" ],
                [ "", "", "", "" ],
                [ "", "", "", "" ],
                [ "", "", "", "" ],
                [ "", "", "", "" ],
            ],
            colorsArray: [ "red", "blue", "green", "yellow", "orange", "black" ],
            choiceOfColor: [],
            chosenPeons: [],
            solution: [],
            resultColors: [ [], [], [], [], [], [], [], [], [], [] ],
            playRowId: 0,
            winLooseMessage: "",
            isPeonActive: true,
        };
    },
    actions: {
        restartAnimation ()
        {
            this.isPeonActive = false
            requestAnimationFrame( () =>
            {
                this.isPeonActive = true
            } )
        },
        getRandomColors ( number )
        {
            if ( this.solution.length < this.numberOfPeons )
            {
                this.solution.push( this.colorsArray[ Math.floor( Math.random() * this.colorsArray.length ) ] );
            }
            return this.solution[ number ];
        },
        addColorToStore ( color )
        {
            this.choiceOfColor.length = 0;
            this.choiceOfColor.push( color );
        },
        getColorFromStore ( chosenRow, chosenPeon, color = this.choiceOfColor[ 0 ] )
        {
            if ( chosenRow !== this.playRowId ) return;

            const row = this.rows[ chosenRow ];
            row[ chosenPeon ] = color;
            this.chosenPeons = row.filter( peon => peon !== "" );

            if ( row.every( x => x !== "" ) )
            {
                this.playRowId++;

                if ( this.chosenPeons.length === this.numberOfPeons )
                {
                    this.checkColorsPlaces( chosenRow );
                }
                this.chosenPeons = [];
            }
        },

        previouslyCountedColor ( colorName )
        {
            this.solutionObject[ colorName ] > 0
                ? this.solutionObject[ colorName ]--
                : "";
        },
        checkColorsPlaces ( chosenRow )
        {
            Object.assign( this.solutionObject, this.solution.reduce( ( map = {}, peon ) => ( {
                ...map,
                [ peon ]: ( map[ peon ] || 0 ) + 1,
            } ), {} ) );
            this.chosenPeons.map( ( x, i ) =>
            {
                if ( this.solution[ i ] === x )
                {
                    this.resultColors[ chosenRow ].push( "black" );
                    this.previouslyCountedColor( x );
                }
            } ),
                this.chosenPeons.map( ( x, i ) =>
                {
                    if ( this.solution.includes( x ) && this.solution[ i ] !== x )
                    {
                        this.solutionObject[ x ] === 0
                            ? this.resultColors[ chosenRow ].push( "none" )
                            : this.resultColors[ chosenRow ].push( "grey" ) &&
                            this.previouslyCountedColor( x );
                    }
                    else if ( !this.solution.includes( x ) )
                    {
                        this.resultColors[ chosenRow ].push( "none" );
                    }
                } );
            this.endOfGame();
            return this.resultColors.map( ( x ) => x.sort() );
        },
        endOfGame ()
        {
            if ( this.resultColors
                .flat()
                .slice( -4 )
                .filter( ( x ) => x === "black" ).length == this.numberOfPeons )
            {
                this.playRowId = 10000;
                this.winLooseMessage = "Bien Joué !";
            }
        },
    },
    getters: {
        numberOfPeons ()
        {
            return ( Object.values( this.rows ).flat().length / Object.values( this.rows ).length );
        },
        solutionObject ()
        {
            const solution = this.solution;
            const solutionObj = solution.reduce( ( map = {}, peon ) => ( {
                ...map,
                [ peon ]: ( map[ peon ] || 0 ) + 1,
            } ), {} );
            return solutionObj;
        },
    },
} );
