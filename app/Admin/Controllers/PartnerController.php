<?php

namespace App\Admin\Controllers;

use App\Models\Partner;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class PartnerController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Partner';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Partner());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('image_name', __('Image name'));
        $grid->column('web_url', __('Web url'));
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
        $show = new Show(Partner::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('image_name', __('Image name'));
        $show->field('web_url', __('Web url'));
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
        $form = new Form(new Partner());

        $form->text('name', __('Name'));
        $form->image('image_name', __('Image name'))->uniqueName();
        $form->text('web_url', __('Web url'));
        $form->switch('is_featured', __('Is featured'));

        return $form;
    }
}
