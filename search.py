import pandas as pd

def kimetsuSearch(name):

    df = pd.read_csv('kimetsu.csv')
    source = list(df['キャラクターネーム'])

    search = name

    if search in source:
        return (f'「{search}」はキャラクターリストにありました')
    else:
        source.append(search)
        df = pd.DataFrame({'キャラクターネーム': source})
        df.to_csv('kimetsu.csv', index=False)
        return (f'「{search}」はキャラクターリストに無かったので、追加しました')


# 直接起動された場合はmain()を起動(モジュールとして呼び出された場合は起動しないようにするため)
if __name__ == "__main__":
    main()
