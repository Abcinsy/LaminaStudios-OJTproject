<?php

namespace App\Admin\Controllers;

use App\Models\Creative;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class CreativeController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Creative';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Creative());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('title', __('Title'));
        $grid->column('description', __('Description'));
        $grid->column('blurb', __('Blurb'));
        $grid->column('links', __('Links'));
        $grid->column('image_name', __('Image name'));
        $grid->column('is_featured', __('Is featured'));
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
        $show = new Show(Creative::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('title', __('Title'));
        $show->field('description', __('Description'));
        $show->field('blurb', __('Blurb'));
        $show->field('links', __('Links'));
        $show->field('image_name', __('Image name'));
        $show->field('is_featured', __('Is featured'));
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
        $form = new Form(new Creative());

        $form->text('name', __('Name'));
        $form->text('title', __('Title'));
        $form->textarea('description', __('Description'));
        $form->textarea('blurb', __('Blurb'));
        $form->keyValue('links', __('Links'));
        $form->image('image_name', __('Image'))->uniqueName();
        $form->switch('is_featured', __('Is featured'));

        return $form;
    }
}
