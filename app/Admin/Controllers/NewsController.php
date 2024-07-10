<?php

namespace App\Admin\Controllers;

use App\Models\Administrator;
use App\Models\News;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class NewsController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'News';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new News());

        $grid->column('id', __('Id'));
        $grid->column('slug', __('Slug'));
        $grid->column('title', __('Title'));
        $grid->column('article', __('Article'));
        $grid->column('image_name', __('Image name'));
        $grid->author_id('Author')->display(function ($id) {
            return Administrator::find($id)->name;
        });
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
        $show = new Show(News::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('slug', __('Slug'));
        $show->field('title', __('Title'));
        $show->field('article', __('Article'));
        $show->field('image_name', __('Image name'));
        $show->field('author_id', __('Author'));
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
        $form = new Form(new News());

        $form->text('slug', __('Slug'));
        $form->text('title', __('Title'));
        $form->textarea('article', __('Article'));
        $form->image('image_name', __('Image'))->uniqueName();
        $form->hidden('author_id', __('User id'))->value(Admin::user()->id);

        return $form;
    }
}
