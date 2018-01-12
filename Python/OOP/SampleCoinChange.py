#with a leg get the count of coins 
def generic_coin_change(legend,amt):
    '''
    returns coinage from legend
    '''
    #sort Legend
    order = sorted_legend_keys(legend)
    #for things in legend in some order
    result = {}
    for coin in order:
        result[coin] = int(amt)/int(legend[coin])
        amt = amt % legend[coin]
    return result