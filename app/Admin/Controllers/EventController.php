<?php

namespace App\Admin\Controllers;

use App\Models\Event;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class EventController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Event';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Event());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('blurb', __('Blurb'));
        $grid->column('description', __('Description'));
        $grid->column('image_name', __('Image name'));
        $grid->column('show', __('Show'));
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
        $show = new Show(Event::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('blurb', __('Blurb'));
        $show->field('description', __('Description'));
        $show->field('image_name', __('Image name'));
        $show->field('show', __('Show'));
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
        $form = new Form(new Event());

        $form->text('name', __('Name'));
        $form->text('blurb', __('Blurb'));
        $form->text('description', __('Description'));
        $form->image('image_name', __('Image'))->uniqueName();
        $form->switch('show', __('Show'));

        return $form;
    }
}
