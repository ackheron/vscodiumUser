"=============================================================================
" vimrc --- Entry file for vim
" Copyright (c) 2016-2020 Shidong Wang & Contributors
" Author: Shidong Wang < wsdjeg@outlook.com >
" URL: https://spacevim.org
" License: GPLv3
"=============================================================================

" Note: Skip initialization for vim-tiny or vim-small.
if 1
    let g:_spacevim_if_lua = 0
    if has('lua')
        if has('win16') || has('win32') || has('win64')
            let s:plugin_dir = fnamemodify(expand('<sfile>'), ':h').'\lua'
            let s:str = s:plugin_dir . '\?.lua;' . s:plugin_dir . '\?\init.lua;'
        else
            let s:plugin_dir = fnamemodify(expand('<sfile>'), ':h').'/lua'
            let s:str = s:plugin_dir . '/?.lua;' . s:plugin_dir . '/?/init.lua;'
        endif
        silent! lua package.path=vim.eval("s:str") .. package.path
        if empty(v:errmsg)
            let g:_spacevim_if_lua = 1
        endif
    endif
    execute 'source' fnamemodify(expand('<sfile>'), ':h').'/main.vim'
endif
" vim:set et sw=2

" map CTRL-E to end-of-line (insert mode)

imap <C-e> <esc>$i<right>

" map CTRL-A to beginning-of-line (insert mode)

imap <C-a> <esc>0i

#nnoremap o o<Esc>
#nnoremap O O<Esc>

" Saut de ligne en (normal mode)

nmap <C-o> O<Esc>
nmap <CR> o<Esc>

" Espace en (normal mode)
" nnoremap <Space> i<Space><ESC>

" delete without yanking
nnoremap <leader>d "_d
vnoremap <leader>d "_d
vnoremap <leader>dd "_dd


" replace currently selected text with default register
" without yanking it
vnoremap <leader>p "_dP

" Déplacement et insertion après et avant un mot
nnoremap <leader>e ea
nnoremap <leader>b bi

" Aller à l'onglet numéro ...
noremap <leader>1 1gt
noremap <leader>2 2gt
noremap <leader>3 3gt
noremap <leader>4 4gt
noremap <leader>5 5gt
noremap <leader>6 6gt
noremap <leader>7 7gt
noremap <leader>8 8gt
noremap <leader>9 9gt
noremap <leader>0 :tablast<cr>

" Déplacement onglet gauche et droite
nnoremap H gT
nnoremap L gt
