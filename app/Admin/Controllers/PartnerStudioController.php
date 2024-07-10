<?php

namespace App\Admin\Controllers;

use App\Models\Game;
use App\Models\PartnerStudio;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class PartnerStudioController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'PartnerStudio';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new PartnerStudio());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('blurb', __('Blurb'));
        $grid->column('description', __('Description'));
        $grid->column('link', __('Link'));
        $grid->column('image_name', __('Image name'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(PartnerStudio::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('blurb', __('Blurb'));
        $show->field('description', __('Description'));
        $show->field('link', __('Link'));
        $show->field('image_name', __('Image name'));
        $show->games('Games', function($games) {
            $games->resource('/admin/games');

            $games->id();
            $games->name();
            $games->blurb();
            $games->description();
            $games->link();
            $games->image_name();
        });
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new PartnerStudio());

        $form->text('name', __('Name'));
        $form->text('blurb', __('Blurb'));
        $form->textarea('description', __('Description'));
        $form->url('link', __('Link'));
        $form->text('image_name', __('Image name'));
        $form->multipleSelect('games', __('Games'))->options(Game::all()->pluck('name', 'id'));

        return $form;
    }
}
